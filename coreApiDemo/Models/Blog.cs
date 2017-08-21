using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using FluentValidation.Attributes;

namespace coreApiDemo.Models
{
    [Validator(typeof(BlogValidator))]
    public partial class Blog
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BlogId { get; set; }

        // [Required]
        // [Url]
        // [NeweggUrl]
        public string Url { get; set; }
    }
}
