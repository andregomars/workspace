using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    public partial class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        [Column(TypeName = "decimal")]
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }

        [ForeignKey("OrderId")]
        [InverseProperty("OrderItem")]
        public virtual Order Order { get; set; }
        [ForeignKey("ProductId")]
        [InverseProperty("OrderItem")]
        public virtual Product Product { get; set; }
    }
}
