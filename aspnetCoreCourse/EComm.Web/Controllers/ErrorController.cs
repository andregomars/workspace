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
using System.Security.Claims;
using Microsoft.AspNetCore.WebSockets.Internal;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace EComm.Web.Controllers
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
