using Microsoft.AspNetCore.Mvc;
using pgr320_eksamen.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace pgr320_eksamen.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class InventoryController : Controller {
//inventory
        private readonly InventoryContext _context;

        public InventoryController(InventoryContext context){
            _context = context;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Inventory>> Get(){
            List<Inventory> inventoryList = await _context.Inventory.ToListAsync();
            return inventoryList;
        }       

        [HttpPut]
        public async Task<Inventory> Put(Inventory updateInventory){
            _context.Update(updateInventory);
            await _context.SaveChangesAsync();
            return updateInventory;
        }  

        [HttpPost]
        public async Task<Inventory> Post(Inventory newInventory){
            _context.Inventory.Add(newInventory);
            await _context.SaveChangesAsync();
            return newInventory;
        }       


        [HttpDelete("{id}")]
        public async Task<Inventory> Delete(int id){
            Inventory inventoryToDelete = await _context.Inventory.FirstAsync( inventory => inventory.Id == id );
            _context.Inventory.Remove(inventoryToDelete);
            await _context.SaveChangesAsync();
            return inventoryToDelete;
        }
    }
}