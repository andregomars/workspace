using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    public partial class Supplier
    {
        public Supplier()
        {
            Product = new HashSet<Product>();
        }

        public int Id { get; set; }
        [Required]
        [MaxLength(40)]
        public string CompanyName { get; set; }
        [MaxLength(50)]
        public string ContactName { get; set; }
        [MaxLength(40)]
        public string ContactTitle { get; set; }
        [MaxLength(40)]
        public string City { get; set; }
        [MaxLength(40)]
        public string Country { get; set; }
        [MaxLength(30)]
        public string Phone { get; set; }
        [MaxLength(30)]
        public string Fax { get; set; }

        [InverseProperty("Supplier")]
        public virtual ICollection<Product> Product { get; set; }
    }
}
