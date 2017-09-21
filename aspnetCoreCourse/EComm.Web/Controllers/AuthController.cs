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
    public class AuthController : Controller
    {
      public IActionResult Login(string ReturnUrl)
      {
        return View(new LoginViewModel { ReturnUrl = ReturnUrl });
      }

      public async Task<IActionResult> Logout()
      {
        if (HttpContext.User.Identity.IsAuthenticated)
        {
          await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }
        return RedirectToAction("Index", "Home");
      }


      [HttpPost]
      [ValidateAntiForgeryToken]
      public async Task<IActionResult> Login(LoginViewModel lvm)
      {
        if (!ModelState.IsValid) return View(lvm);
        bool auth = (lvm.Username == "test" && lvm.Password == "password");

        if (!auth) return View(lvm);
        var principal = new ClaimsPrincipal(
          new ClaimsIdentity(new List<Claim>
            {
              new Claim(ClaimTypes.Name, lvm.Username),
              new Claim(ClaimTypes.Role, "Admin")
            }, "FormsAuthentication"
          )
        );

        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

        if (lvm.ReturnUrl != null) return LocalRedirect(lvm.ReturnUrl);
        return RedirectToAction("Index", "Home");
      }
    }
}
