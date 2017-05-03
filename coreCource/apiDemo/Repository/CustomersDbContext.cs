using Microsoft.EntityFrameworkCore;
using apiDemo.Models;

namespace apiDemo.Repository
{
  public class CustomersDbContext: DbContext
  {
    public DbSet<Customer> Customers { get; set; }

    public CustomersDbContext(DbContextOptions<CustomersDbContext> options)
      : base(options) {}

  }
}