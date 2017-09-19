using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EComm.Data
{
    public partial class Customer
    {
        public Customer()
        {
            Order = new HashSet<Order>();
        }

        public int Id { get; set; }
        [Required]
        [StringLength(40)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(40)]
        public string LastName { get; set; }
        [StringLength(40)]
        public string City { get; set; }
        [StringLength(40)]
        public string Country { get; set; }
        [StringLength(20)]
        public string Phone { get; set; }

        [InverseProperty("Customer")]
        public ICollection<Order> Order { get; set; }
    }
}
