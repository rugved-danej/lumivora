"use client"
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [addingToWishlist, setAddingToWishlist] = useState(false)

  useEffect(() => {
    if (params.slug) {
      fetchProduct()
    }
  }, [params.slug])

  useEffect(() => {
    if (product && user) {
      checkWishlistStatus()
    }
  }, [product, user])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`/api/products/by-slug/${params.slug}`)
      const data = await res.json()

      if (res.ok) {
        setProduct(data.product)
      } else {
        setError(data.error || 'Product not found')
        setTimeout(() => {
          router.push('/shop')
        }, 3000)
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      setError('Failed to load product')
      setTimeout(() => {
        router.push('/shop')
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  const checkWishlistStatus = async () => {
    try {
      const res = await fetch('/api/wishlist')
      if (res.ok) {
        const data = await res.json()
        setIsInWishlist(data.wishlist.some(item => item.id === product.id))
      }
    } catch (error) {
      console.error('Error checking wishlist:', error)
    }
  }

  const toggleWishlist = async () => {
    if (!user) {
      router.push('/login')
      return
    }

    setAddingToWishlist(true)
    try {
      const method = isInWishlist ? 'DELETE' : 'POST'
      const res = await fetch('/api/wishlist', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id })
      })

      if (res.ok) {
        setIsInWishlist(!isInWishlist)
      }
    } catch (error) {
      console.error('Error updating wishlist:', error)
    } finally {
      setAddingToWishlist(false)
    }
  }

  const handleBuyNow = () => {
    if (!user) {
      router.push('/login')
      return
    }
    router.push(`/checkout?productId=${product.id}`)
  }

  if (loading || authLoading) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <p className="loading-text">Loading product...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="empty-state">
            <i className="lni lni-package"></i>
            <h3>Product Not Found</h3>
            <p>{error}</p>
            <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', marginTop: '10px' }}>
              Redirecting to shop in 3 seconds...
            </p>
            <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
              Browse All Products
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!product) {
    return null
  }

  const productImages = product.imageUrl ? [product.imageUrl] : []

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <section className="section">
          <div className="container">
            {/* Breadcrumb */}
            <div style={{
              marginBottom: '30px',
              fontSize: '14px',
              color: 'var(--soft-taupe)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <a href="/" style={{ color: 'var(--soft-taupe)', textDecoration: 'none' }}>Home</a>
              <span>/</span>
              <a href="/shop" style={{ color: 'var(--soft-taupe)', textDecoration: 'none' }}>Shop</a>
              <span>/</span>
              <span style={{ color: 'var(--charcoal-text)' }}>{product.name}</span>
            </div>

            {/* Product Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
              alignItems: 'start'
            }}>
              {/* Product Image */}
              <div>
                <div style={{
                  backgroundColor: 'var(--warm-cream)',
                  borderRadius: '20px',
                  padding: '40px',
                  marginBottom: '20px',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {productImages.length > 0 ? (
                    <img
                      src={productImages[selectedImage]}
                      alt={product.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    <i className="lni lni-package" style={{ fontSize: '120px', color: 'var(--soft-gold)' }}></i>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: 'var(--light-beige)',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  color: 'var(--soft-gold)',
                  marginBottom: '20px'
                }}>
                  {product.category.replace('-', ' ')}
                </div>

                <h1 style={{
                  fontSize: 'clamp(28px, 5vw, 42px)',
                  marginBottom: '15px',
                  color: 'var(--charcoal-text)'
                }}>
                  {product.name}
                </h1>

                <div style={{
                  fontSize: 'clamp(32px, 6vw, 42px)',
                  fontWeight: 700,
                  color: 'var(--soft-gold)',
                  marginBottom: '25px'
                }}>
                  {product.price}
                </div>

                <p style={{
                  color: 'var(--soft-taupe)',
                  fontSize: '16px',
                  lineHeight: 1.8,
                  marginBottom: '30px'
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '30px',
                  padding: '15px',
                  backgroundColor: product.stock > 0 ? '#e8f5e9' : '#ffebee',
                  borderRadius: '12px'
                }}>
                  <i className={`lni ${product.stock > 0 ? 'lni-checkmark-circle' : 'lni-close-circle'}`}
                    style={{ fontSize: '24px', color: product.stock > 0 ? '#4caf50' : '#f44336' }}></i>
                  <span style={{
                    fontWeight: 600,
                    color: product.stock > 0 ? '#2e7d32' : '#c62828'
                  }}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  {product.stock > 0 && (
                    <button
                      onClick={handleBuyNow}
                      className="btn btn-primary-large"
                      style={{ flex: 1, minWidth: '200px' }}
                    >
                      <i className="lni lni-cart"></i>
                      Buy Now
                    </button>
                  )}

                  <button
                    onClick={toggleWishlist}
                    disabled={addingToWishlist}
                    className="btn btn-outline-large"
                    style={{
                      backgroundColor: isInWishlist ? 'var(--soft-gold)' : 'transparent',
                      color: isInWishlist ? 'white' : 'var(--charcoal-text)',
                      borderColor: 'var(--soft-gold)'
                    }}
                  >
                    <i className={`lni ${isInWishlist ? 'lni-heart-filled' : 'lni-heart'}`}></i>
                    {addingToWishlist ? 'Updating...' : (isInWishlist ? 'In Wishlist' : 'Add to Wishlist')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}