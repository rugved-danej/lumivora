// app/faq/page.js
'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "We offer standard shipping (5-7 business days). All orders are processed within 1-2 business days. You'll receive a tracking number once your order ships."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we ship within the India. We're working on expanding our international shipping options. Follow us on social media for updates!"
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          q: "How do I clean my beauty tools?",
          a: "Most of our beauty tools can be cleaned with warm water and gentle soap. For stone tools like jade rollers, avoid soaking. Detailed care instructions are included with each product."
        },
        {
          q: "Are your home gadgets energy efficient?",
          a: "Yes! All our home gadgets are designed with energy efficiency in mind. They meet or exceed energy efficiency standards and are safe for extended use."
        }
      ]
    },
    {
      category: "Payment & Security",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Phone Pe, Google Pay, and other major UPI payment methods. All transactions are encrypted and secure."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete payment details on our servers."
        },
        {
          q: "Can I change or cancel my order?",
          a: "You can modify or cancel your order within 2 hours of placing it by contacting us through social media. After that, your order will be in processing."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          q: "Do I need an account to place an order?",
          a: "Yes, You will have to create the account to place an order, Creating account gives you access of tracking your order."
        },
        {
          q: "How do I contact customer support?",
          a: "You can reach us through our social media channels (Instagram, Facebook, Pinterest). We typically respond within 24 hours."
        },
        {
          q: "Can I get product recommendations?",
          a: "Of course! Message us on Instagram or Facebook with your skincare concerns or preferences, and we'll be happy to recommend products perfect for you."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Frequently Asked Questions</h1>
              <p>Find answers to common questions about our products and services</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              
              {/* Quick Help Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '50px'
              }}>
                <a href="/contact" style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--light-beige)',
                  padding: '25px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }} className="benefit-card">
                  <i className="lni lni-comments" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
                  <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Contact Us</h3>
                  <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Connect via social media</p>
                </a>

                <a href="/shop" style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--light-beige)',
                  padding: '25px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }} className="benefit-card">
                  <i className="lni lni-shopping-basket" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
                  <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Shop Products</h3>
                  <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Browse our collection</p>
                </a>

                <a href="/about" style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--light-beige)',
                  padding: '25px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }} className="benefit-card">
                  <i className="lni lni-heart" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
                  <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>About Us</h3>
                  <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Learn our story</p>
                </a>
              </div>

              {/* FAQ Categories */}
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} style={{marginBottom: '40px'}}>
                  <h2 style={{
                    fontSize: '28px',
                    marginBottom: '25px',
                    color: 'var(--charcoal-text)',
                    paddingBottom: '15px',
                    borderBottom: '2px solid var(--light-beige)'
                  }}>
                    {category.category}
                  </h2>

                  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {category.questions.map((faq, questionIndex) => {
                      const index = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === index;

                      return (
                        <div
                          key={questionIndex}
                          style={{
                            backgroundColor: 'var(--pearl-white)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--light-beige)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                            style={{
                              width: '100%',
                              padding: '20px',
                              backgroundColor: isOpen ? 'var(--light-beige)' : 'transparent',
                              border: 'none',
                              textAlign: 'left',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              transition: 'background-color 0.3s ease'
                            }}
                          >
                            <span style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: 'var(--charcoal-text)',
                              paddingRight: '20px'
                            }}>
                              {faq.q}
                            </span>
                            <i 
                              className={`lni ${isOpen ? 'lni-chevron-up' : 'lni-chevron-down'}`}
                              style={{
                                fontSize: '18px',
                                color: 'var(--soft-gold)',
                                transition: 'transform 0.3s ease'
                              }}
                            ></i>
                          </button>

                          <div style={{
                            maxHeight: isOpen ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease'
                          }}>
                            <div style={{
                              padding: '0 20px 20px 20px',
                              color: 'var(--soft-taupe)',
                              fontSize: '15px',
                              lineHeight: '1.6'
                            }}>
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Still Have Questions */}
              <div style={{
                backgroundColor: 'var(--light-beige)',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                marginTop: '50px'
              }}>
                <i className="lni lni-question-circle" style={{
                  fontSize: '48px',
                  color: 'var(--soft-gold)',
                  marginBottom: '20px'
                }}></i>
                <h3 style={{fontSize: '24px', marginBottom: '15px'}}>Still Have Questions?</h3>
                <p style={{color: 'var(--soft-taupe)', marginBottom: '25px'}}>
                  Can't find what you're looking for? We're here to help!
                </p>
                <a href="/contact" className="btn btn-primary-large">
                  <i className="lni lni-comments"></i>
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}