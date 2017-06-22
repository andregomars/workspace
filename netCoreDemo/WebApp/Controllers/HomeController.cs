using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class HomeController : Controller
    {
        private ECommContext db;

        public HomeController(ECommContext context)
        {
            db = context;
        }

        public IActionResult Index()
        {
            return View();
            // return Content($"Number of Content: { db.Product.Count() }");
            // var model = db.Product.ToList();
            // return View(model);
        }

        // public IEnumerable<String> Index()
        // {
        //     return db.Product.ToList().Select(x => x.ProductName);
        // }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
