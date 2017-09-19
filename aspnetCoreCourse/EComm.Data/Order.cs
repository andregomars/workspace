using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EComm.Data
{
    public partial class Order
    {
        public Order()
        {
            OrderItem = new HashSet<OrderItem>();
        }

        public int Id { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime OrderDate { get; set; }
        [StringLength(10)]
        public string OrderNumber { get; set; }
        public int CustomerId { get; set; }
        [Column(TypeName = "decimal(12, 2)")]
        public decimal? TotalAmount { get; set; }

        [ForeignKey("CustomerId")]
        [InverseProperty("Order")]
        public Customer Customer { get; set; }
        [InverseProperty("Order")]
        public ICollection<OrderItem> OrderItem { get; set; }
    }
}
