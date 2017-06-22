using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Order = new HashSet<Order>();
        }

        public int Id { get; set; }
        [Required]
        [MaxLength(40)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(40)]
        public string LastName { get; set; }
        [MaxLength(40)]
        public string City { get; set; }
        [MaxLength(40)]
        public string Country { get; set; }
        [MaxLength(20)]
        public string Phone { get; set; }

        [InverseProperty("Customer")]
        public virtual ICollection<Order> Order { get; set; }
    }
}
