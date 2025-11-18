// app/shop/page.js
"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Slug generation function
function slugify(text) {
  if (!text) return ''
  
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Keep word chars, spaces, and hyphens
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, '')   // Remove leading/trailing hyphens
}

export default function Shop() {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    fetchProducts()
  }, [selectedCategory])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const url = selectedCategory === 'all' 
        ? '/api/products' 
        : `/api/products?category=${selectedCategory}`
      
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return new Date(b.createdAt) - new Date(a.createdAt)
    }
  })

  const handleProductClick = (productName) => {
    const slug = slugify(productName)
    console.log('Product name:', productName)
    console.log('Generated slug:', slug)
    console.log('Navigating to:', `/product/${slug}`)
    router.push(`/product/${slug}`)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero" style={{ padding: '80px 0', minHeight: 'auto' }}>
          <div className="container">
            <div className="hero-content">
              <h1>Shop All Products</h1>
              <p>Discover our complete collection of beauty tools, skincare accessories, and home gadgets</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section">
          <div className="container">
            {/* Filters */}
            <div className="shop-filters">
              <div className="filter-group">
                <label>Category</label>
                <select 
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="beauty-tools">Beauty Tools</option>
                  <option value="skincare-accessories">Skincare Accessories</option>
                  <option value="home-gadgets">Home Gadgets</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Sort by</label>
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              <div className="product-count">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'}
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="skeleton-grid">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="skeleton-card">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-content">
                      <div className="skeleton-title"></div>
                      <div className="skeleton-description"></div>
                      <div className="skeleton-description"></div>
                      <div className="skeleton-footer">
                        <div className="skeleton-price"></div>
                        <div className="skeleton-button"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedProducts.length > 0 ? (
              <div className="products">
                {sortedProducts.map(product => {
                  const productSlug = slugify(product.name)
                  
                  return (
                    <div
                      key={product.id}
                      className="product-card"
                    >
                      <div 
                        className="product-img"
                        onClick={() => handleProductClick(product.name)}
                        style={{ cursor: 'pointer' }}
                      >
                        {product.imageUrl ? (
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <i className="lni lni-package"></i>
                        )}
                      </div>
                      <div className="product-content">
                        <h3 
                          onClick={() => handleProductClick(product.name)}
                          style={{ cursor: 'pointer' }}
                        >
                          {product.name}
                        </h3>
                        <p className="product-price">₹{product.price}</p>
                        <p>{product.description}</p>
                        {product.stock > 0 ? (
                          <button 
                            className="btn"
                            onClick={() => handleProductClick(product.name)}
                          >
                            View Details
                          </button>
                        ) : (
                          <button className="btn" disabled style={{ opacity: 0.5 }}>
                            Out of Stock
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="empty-products">
                <i className="lni lni-package"></i>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or check back later for new products.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}