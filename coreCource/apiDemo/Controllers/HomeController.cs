using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using apiDemo.Repository;
using apiDemo.Models;

namespace apiDemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly CustomersDbContext _context;

        public HomeController(CustomersDbContext context)
        {
            _context = context;
        }

        // public IActionResult Index()
        // {
        //     return View();
        // }

        public async Task<IActionResult> Index()
        {
            _context.Customers.Add(new Customer { Name = "Kobe", City = "Newport" });
            await _context.SaveChangesAsync();
            var customer = _context.Customers.FirstOrDefault();
            return View(customer);
        }

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
