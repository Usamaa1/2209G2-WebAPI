using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data;

public partial class ProductsContext : DbContext
{
    public ProductsContext()
    {
    }

    public ProductsContext(DbContextOptions<ProductsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Products__3214EC074DD8A87B");

            entity.Property(e => e.ProdDesc)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("prodDesc");
            entity.Property(e => e.ProdImage)
                .IsUnicode(false)
                .HasColumnName("prodImage");
            entity.Property(e => e.ProdName)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("prodName");
            entity.Property(e => e.ProdPrice).HasColumnName("prodPrice");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
