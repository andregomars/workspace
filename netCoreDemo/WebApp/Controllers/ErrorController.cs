using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;
using WebApp.ViewModels;

namespace WebApp.Controllers
{
    public class ErrorController : Controller
    {
        [Route("error/{statusCode:int}")]
        public IActionResult Index(int statusCode)
        {
            ViewBag.StatusCode = statusCode;
            return View("Error");
        }
    }
}