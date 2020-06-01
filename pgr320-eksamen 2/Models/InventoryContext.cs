using Microsoft.EntityFrameworkCore;

namespace pgr320_eksamen.Models{

    public class InventoryContext : DbContext {

        public InventoryContext(DbContextOptions<InventoryContext> options) : base(options){}

        public DbSet<Inventory> Inventory { get; set; }
    }
}