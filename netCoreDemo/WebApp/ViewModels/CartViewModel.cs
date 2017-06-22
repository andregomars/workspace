using System.ComponentModel.DataAnnotations;
using WebApp.Models;

namespace WebApp.ViewModels
{
  public class CartViewModel
  {
    public ShoppingCart Cart { get; set; }

    [Required]
    public string CustomerName { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [CreditCard]
    public string CreditCard { get; set; }
  }
}