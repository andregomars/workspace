using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using coreApiDemo.Repositories;
using coreApiDemo.Models;
using System.Threading.Tasks;

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

        [HttpGet("GetAllAsync")]
        public async Task<IEnumerable<Blog>> GetAllAsync()
        {
            return await _blogRepository.GetAllAsync();
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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blog = _blogRepository.Find(id);
            if (blog == null)
            {
                return NotFound();
            }

            _blogRepository.Update(item);
            return new ObjectResult(item);
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