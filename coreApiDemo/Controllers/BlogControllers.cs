using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using coreApiDemo.Repositories;
using coreApiDemo.Models;

namespace coreApiDemo.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        private readonly IBlogRepository _blogRepository;

        public BlogController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }
    
        [HttpGet]
        public IEnumerable<Blog> GetAll()
        {
            return _blogRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetBlog")]
        public IActionResult GetById(long id)
        {
            var item = _blogRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Blog item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _blogRepository.Add(item);

            return CreatedAtRoute("GetBlog", new { id = item.BlogId }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Blog item)
        {
            if (item == null || item.BlogId != id)
            {
                return BadRequest();
            }

            var blog = _blogRepository.Find(id);
            if (blog == null)
            {
                return NotFound();
            }

            _blogRepository.Update(item);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var blog = _blogRepository.Find(id);
            if (blog == null)
            {
                return NotFound();
            }

            _blogRepository.Remove(id);
            return new NoContentResult();
        }
    }

}