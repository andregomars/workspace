using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;
using WebApp.ViewModels;

namespace WebApp.Controllers
{
    public class ProductController : Controller
    {
        private ECommContext db;
        public ProductController(ECommContext context)
        {
            db = context;
        }

        [HttpGet("api/products")]
        public IActionResult Get()
        {
            var products = db.Product.ToList();
            return new ObjectResult(products);
        }

        [HttpGet("api/product/{id:int}")]
        public IActionResult Get(int id)
        {
            var product = db.Product.SingleOrDefault(p => p.Id == id);
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
            var existing = db.Product.SingleOrDefault(p => p.Id == id);
            if (existing == null) return NotFound();

            existing.ProductName = product.ProductName;
            existing.UnitPrice = product.UnitPrice;
            existing.Package = product.Package;
            existing.IsDiscontinued = product.IsDiscontinued;
            existing.SupplierId = product.SupplierId;
            db.SaveChanges();

            return new NoContentResult();
        }


        [Authorize(Policy="AdminsOnly")]
        [Route("product/{id:int}")]
        public IActionResult Detail(int id)
        {
            var product = db.Product.Include(p => p.Supplier).SingleOrDefault(x => x.Id == id);
            if (product == null) return NotFound();

            return View(product);
        }

        [HttpPost]
        public IActionResult AddToCart(int id, int quantity)
        {
            var product = db.Product.SingleOrDefault(p => p.Id == id);
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
                cart.LineItems.Add(new ShoppingCart.LineItem 
                {
                    Product = product,
                    Quantity = quantity
                });
            }
            ShoppingCart.StoreInSession(cart, HttpContext.Session);

            return PartialView("_AddedToCart", message);

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

        public IActionResult Cart()
        {
            var cart = ShoppingCart.GetFromSession(HttpContext.Session);
            var cvm = new CartViewModel() { Cart = cart };
            return View(cvm);
        }

    }

    public class ProductList: ViewComponent
    {
        private ECommContext db;
        public ProductList(ECommContext context)
        {
            db = context;
        }

        public IViewComponentResult Invoke()
        {
            var model = db.Product.ToList();
            return View("~/Views/Shared/_ProductList.cshtml", model);
        }
    }
}