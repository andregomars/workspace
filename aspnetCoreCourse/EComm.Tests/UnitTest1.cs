using System;
using Xunit;
using EComm.Data;
using EComm.Web.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace EComm.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, (2+2));

        }

        [Fact]
        public void ProductDetail()
        {
            //arrange
            var controller = new ProductController(CreateStubContext());

            //act
            var result = controller.Detail(2);
            // System.Diagnostics.Debug.WriteLine(result);

            //assert
            Assert.IsAssignableFrom<ViewResult>(result);
            var vr = result as ViewResult;
            Assert.IsAssignableFrom<Product>(vr.Model);
            var model = vr.Model as Product;
            Assert.Equal("Bread", model.ProductName);
        }

        private ECommContext CreateStubContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<ECommContext>();
            optionsBuilder.UseInMemoryDatabase("test");
            var context = new ECommContext(optionsBuilder.Options);

            context.Product.Add(new Product { Id = 1, SupplierId = 11, ProductName = "Milk", UnitPrice = 2.50M });
            context.Product.Add(new Product { Id = 2, SupplierId = 11, ProductName = "Bread", UnitPrice = 3.25M });
            context.Product.Add(new Product { Id = 3, SupplierId = 11, ProductName = "Juice", UnitPrice = 5.75M });

            context.Supplier.Add(new Supplier { Id = 11, CompanyName = "Ingram"} );

            context.SaveChanges();
            return context;
       }
    }
}
