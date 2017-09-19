using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EComm.Data
{
    public partial class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        [Column(TypeName = "decimal(12, 2)")]
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }

        [ForeignKey("OrderId")]
        [InverseProperty("OrderItem")]
        public Order Order { get; set; }
        [ForeignKey("ProductId")]
        [InverseProperty("OrderItem")]
        public Product Product { get; set; }
    }
}
