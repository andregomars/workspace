using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EComm.Web.Models;
using EComm.Data;
using EComm.Web.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace EComm.Web.Controllers
{
    public class ProductController : Controller
    {
        private ECommContext _dataContext;
    
        public ProductController(ECommContext dataContext)
        {
            _dataContext = dataContext;
        }

        [Authorize(Policy="AdminOnly")]
        [Route("product/{id:int}")]
        public IActionResult Detail(int id)
        {
            var product = _dataContext.Product.Include(p => p.Supplier)
                .SingleOrDefault(p => p.Id == id);

            if (product == null) return NotFound();
            return View(product);
        }

        [HttpPost]
        public IActionResult AddToCart(int id, int quantity)
        {
            var product = _dataContext.Product.SingleOrDefault(p => p.Id == id);
            var totalCost = quantity * product.UnitPrice;
            string message = $"You added {product.ProductName} " +
                            $"(x {quantity}) to your cart " +
                            $"at a total cost of {totalCost:C}.";
            
            var cart = ShoppingCart.GetFromSession(HttpContext.Session);
            var lineItem = cart.LineItems.SingleOrDefault(item =>
                    item.Product.Id == id);
            if (lineItem != null)
            {
                lineItem.Quantity += quantity;
            }
            else
            {
                cart.LineItems.Add(new ShoppingCart.LineItem{
                    Product = product,
                    Quantity = quantity
                });
            }
            ShoppingCart.StoreInSession(cart, HttpContext.Session);

            return PartialView("_AddedToCart", message);

        }
        
        public IActionResult Cart()
        {
            var cart = ShoppingCart.GetFromSession(HttpContext.Session);
            var cvm = new CartViewModel() { Cart = cart };
            return View(cvm);
        }

        [HttpPost]
        public IActionResult Checkout(CartViewModel cvm)
        {
            if (!ModelState.IsValid)
            {
                cvm.Cart = ShoppingCart.GetFromSession(HttpContext.Session);
                return View("Cart", cvm);
            }
            HttpContext.Session.Clear();
            return View("ThankYou");
        }

        [HttpGet("api/products")]
        public IActionResult Get()
        {
            var products = _dataContext.Product.ToList();
            return new ObjectResult(products);
        }

        [HttpGet("api/product/{id:int}")]
        public IActionResult Get(int id)
        {
            var product = _dataContext.Product.SingleOrDefault(p => p.Id == id);
            if (product == null) return NotFound();

            return new ObjectResult(product);
        }

        [HttpPut("api/product/{id:int}")]
        public IActionResult Put(int id, [FromBody]Product product)
        {
            if (product == null || product.Id != id)
            {
                return BadRequest();
            }

            var existing = _dataContext.Product.SingleOrDefault(p => p.Id == id);
            if (existing == null) return NotFound();

            existing.ProductName = product.ProductName;
            existing.UnitPrice = product.UnitPrice;
            existing.Package = product.Package;
            existing.IsDiscontinued = product.IsDiscontinued;
            existing.SupplierId = product.SupplierId;
            _dataContext.SaveChanges();

            return new NoContentResult();
        }
   }

   public class ProductList: ViewComponent
   {
        private ECommContext _dataContext;
    
        public ProductList(ECommContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IViewComponentResult Invoke()
        {
            var model = _dataContext.Product.ToList();
            return View("~/Views/Shared/_ProductList.cshtml", model);
        }
   }
}
