using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderItem = new HashSet<OrderItem>();
        }

        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string ProductName { get; set; }
        public int SupplierId { get; set; }
        [Column(TypeName = "decimal")]
        public decimal? UnitPrice { get; set; }
        [MaxLength(30)]
        public string Package { get; set; }
        public bool IsDiscontinued { get; set; }

        [InverseProperty("Product")]
        public virtual ICollection<OrderItem> OrderItem { get; set; }
        [ForeignKey("SupplierId")]
        [InverseProperty("Product")]
        public virtual Supplier Supplier { get; set; }
        
        public string FormattedUnitPrice
        {
            get { return String.Format("{0:C}", UnitPrice); }
        }
    }
}
