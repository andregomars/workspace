using System;
using System.Collections.Generic;
using System.Linq;
using coreApiDemo.Models;

namespace coreApiDemo.Repositories
{
    public class BlogRepository : IBlogRepository
    {
        private readonly BloggingContext _context;

        public BlogRepository(BloggingContext context)
        {
            _context = context;
        }

        public IEnumerable<Blog> GetAll()
        {
            return _context.Blog.ToList();
        }

        public void Add(Blog item)
        {
            _context.Blog.Add(item);
            _context.SaveChanges();
        }

        public Blog Find(long key)
        {
            return _context.Blog.FirstOrDefault(t => t.BlogId == key);
        }

        public void Remove(long key)
        {
            var entity = _context.Blog.First(t => t.BlogId == key);
            _context.Blog.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Blog item)
        {
            // _context.Blog.Update(item);
            var entity = _context.Blog.First(t => t.BlogId == item.BlogId);
            entity.Url = item.Url;
            _context.Blog.Update(entity);
            _context.SaveChanges();
        }
    }
}