using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using apiDemo.Models;

namespace apiDemo.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Customer> Get()
        // public IEnumerable<string> Get()
        {
            // return new string[] { "value1", "value2" };
            var c1 = new Customer { Id = 1, Name = "Andre", City = "Dujiangyan" };
            var c2 = new Customer { Id = 2, Name = "Carol", City = "Chengdu" };
            var c3 = new Customer { Id = 3, Name = "Blake", City = "Whittier" };

            return new Customer[] { c1, c2, c3 };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
