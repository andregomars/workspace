using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
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
        [MaxLength(10)]
        public string OrderNumber { get; set; }
        public int CustomerId { get; set; }
        [Column(TypeName = "decimal")]
        public decimal? TotalAmount { get; set; }

        [InverseProperty("Order")]
        public virtual ICollection<OrderItem> OrderItem { get; set; }
        [ForeignKey("CustomerId")]
        [InverseProperty("Order")]
        public virtual Customer Customer { get; set; }
    }
}
