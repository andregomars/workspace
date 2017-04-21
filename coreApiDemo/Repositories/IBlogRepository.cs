using System.Collections.Generic;
using coreApiDemo.Models;

namespace coreApiDemo.Repositories
{
    public interface IBlogRepository
    {
        void Add(Blog item);
        IEnumerable<Blog> GetAll();
        Blog Find(long key);
        void Remove(long key);
        void Update(Blog item);
    }
}