using System.ComponentModel.DataAnnotations;

namespace pgr320_eksamen.Models{

    public class Inventory {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}