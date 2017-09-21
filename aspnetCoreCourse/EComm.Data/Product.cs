using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EComm.Data
{
    public partial class Product
    {
        public Product()
        {
            OrderItem = new HashSet<OrderItem>();
        }

        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string ProductName { get; set; }
        public int SupplierId { get; set; }
        [Column(TypeName = "decimal(12, 2)")]
        public decimal? UnitPrice { get; set; }
        [StringLength(30)]
        public string Package { get; set; }
        public bool? IsDiscontinued { get; set; }

        [ForeignKey("SupplierId")]
        [InverseProperty("Product")]
        public Supplier Supplier { get; set; }
        [InverseProperty("Product")]
        public ICollection<OrderItem> OrderItem { get; set; }

        public string FormattedUnitPrice
        {
            get 
            {
                return String.Format("{0:C}", UnitPrice); 
            }
        }
    }
}
