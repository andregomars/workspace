using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace WebApp.Models
{
    public partial class ECommContext : DbContext
    {
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderItem> OrderItem { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Supplier> Supplier { get; set; }

        public ECommContext(DbContextOptions options)
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=EComm;User Id=sa;Password=Pa20090508;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes()) {
                entity.Relational().TableName = entity.DisplayName();
            }
            
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasIndex(e => new { e.LastName, e.FirstName })
                    .HasName("IndexCustomerName");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomerId)
                    .HasName("IndexOrderCustomerId");

                entity.HasIndex(e => e.OrderDate)
                    .HasName("IndexOrderOrderDate");

                entity.Property(e => e.OrderDate).HasDefaultValueSql("getdate()");

                entity.Property(e => e.TotalAmount).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.HasIndex(e => e.OrderId)
                    .HasName("IndexOrderItemOrderId");

                entity.HasIndex(e => e.ProductId)
                    .HasName("IndexOrderItemProductId");

                entity.Property(e => e.Quantity).HasDefaultValueSql("1");

                entity.Property(e => e.UnitPrice).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasIndex(e => e.ProductName)
                    .HasName("IndexProductName");

                entity.HasIndex(e => e.SupplierId)
                    .HasName("IndexProductSupplierId");

                entity.Property(e => e.IsDiscontinued).HasDefaultValueSql("0");

                entity.Property(e => e.UnitPrice).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.HasIndex(e => e.CompanyName)
                    .HasName("IndexSupplierName");

                entity.HasIndex(e => e.Country)
                    .HasName("IndexSupplierCountry");
            });
        }
    }
}