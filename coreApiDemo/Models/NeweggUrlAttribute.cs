using System.ComponentModel.DataAnnotations;

namespace coreApiDemo.Models
{
  public class NeweggUrlAttribute : ValidationAttribute
  {
    protected override ValidationResult IsValid(object value, 
      ValidationContext validationContext)
    {
      Blog blog = (Blog)validationContext.ObjectInstance;

      if (!blog.Url.Contains("newegg.com"))
      {
        return new ValidationResult("You gotta have newegg.com in your URL");
      }

      return ValidationResult.Success;
    }
  }
}