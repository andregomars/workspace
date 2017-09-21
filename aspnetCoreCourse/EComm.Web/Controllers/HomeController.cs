using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EComm.Web.Models;
using EComm.Data;

namespace EComm.Web.Controllers
{
    public class HomeController : Controller
    {
        private ECommContext _dataContext;
    
        public HomeController(ECommContext dataContext)
        {
            _dataContext = dataContext;
        }

        // public List<Product> Index()
        public IActionResult Index()
        {
            return View();
            // return Content($"Number of products: {_dataContext.Product.Count()}");
            // return _dataContext.Product.ToList();
            // var model = _dataContext.Product.ToList();
            // return View(model);

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
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
