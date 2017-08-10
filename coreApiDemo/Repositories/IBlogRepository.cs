using System.Collections.Generic;
using System.Threading.Tasks;
using coreApiDemo.Models;

namespace coreApiDemo.Repositories
{
    public interface IBlogRepository
    {
        void Add(Blog item);
        IEnumerable<Blog> GetAll();
        Task<IEnumerable<Blog>> GetAllAsync();
        Blog Find(long key);
        void Remove(long key);
        void Update(Blog item);
    }
}