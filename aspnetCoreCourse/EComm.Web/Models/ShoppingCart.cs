using EComm.Data;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Text;
using Newtonsoft.Json;

namespace EComm.Web.Models
{
  public class ShoppingCart
  {
    public List<LineItem> LineItems { get; set; }
    public ShoppingCart() 
    {
      LineItems = new List<LineItem>();
    }

    public string FormattedGradTotal 
    { 
      get { return $"{LineItems.Sum(i => i.TotalCost):C}"; }
    }

    public static ShoppingCart GetFromSession(ISession session)
    {
      byte[] data;
      ShoppingCart cart = null;
      bool b = session.TryGetValue("ShoppingCart", out data);
      if (b)
      {
        string json = Encoding.UTF8.GetString(data);
        cart = JsonConvert.DeserializeObject<ShoppingCart>(json);
      }
      return cart ?? new ShoppingCart();
    }

    public static void StoreInSession(ShoppingCart cart, ISession session)
    {
      string json = JsonConvert.SerializeObject(cart);
      byte[] data = Encoding.UTF8.GetBytes(json);
      session.Set("ShoppingCart", data);
    }

    public class LineItem
    {
      public Product Product { get; set; }
      public int Quantity { get; set; }
      public decimal TotalCost { get { return Product.UnitPrice.Value * Quantity; } }
    }
  }
}