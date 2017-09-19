using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EComm.Data
{
    public partial class Supplier
    {
        public Supplier()
        {
            Product = new HashSet<Product>();
        }

        public int Id { get; set; }
        [Required]
        [StringLength(40)]
        public string CompanyName { get; set; }
        [StringLength(50)]
        public string ContactName { get; set; }
        [StringLength(40)]
        public string ContactTitle { get; set; }
        [StringLength(40)]
        public string City { get; set; }
        [StringLength(40)]
        public string Country { get; set; }
        [StringLength(30)]
        public string Phone { get; set; }
        [StringLength(30)]
        public string Fax { get; set; }

        [InverseProperty("Supplier")]
        public ICollection<Product> Product { get; set; }
    }
}
