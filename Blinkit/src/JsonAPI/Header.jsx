import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, fetchApi, removeQuantity } from '../Feature/Slice'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Input Placeholder
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholders = ["Search \"Milk\"", "Search \"Bread\"", "Search \"Butter\"", "Search \"Eggs\""]

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [placeholders.length])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())
  }, [dispatch])

  const record = useSelector((state) => state.apiKey)

  const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }

  const totalCount = record.data?.reduce((total, product) => total + (product.quantity > 0 ? product.quantity : 0), 0) || 0

  const totalAmount = record.data?.reduce((total, product) => total + (product.quantity > 0 ? product.quantity * product.price : 0), 0) || 0

  return (
    <div>
      {isCartOpen && <div className="overlay show" onClick={() => setIsCartOpen(false)}></div>}

      <header>
        <div className="logo">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png"
            alt="Logo"
          />
        </div>

        <div className="info">
          <p>Delivery in 8 minutes</p>
          <span>B62, Pocket B, South City I, Sect...</span>
        </div>

        <div className="search_bar">
          <div className="input_search">
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            <input type="text" placeholder={placeholders[placeholderIndex]} />
          </div>
        </div>

        <div className="login">
          <button>Login</button>
        </div>

        <div className="cart">
          <button onClick={() => setIsCartOpen(true)}>
            {
              totalCount === 0
                ? (
                  <>
                    <i className="ri-shopping-cart-2-line"></i>&nbsp;
                    Cart
                  </>
                )
                : (
                  <div className='cart_btn_diff'>
                    <div className="left_btn">
                      <i className="ri-shopping-cart-2-line"></i>
                    </div>
                    <div className="right_btn">
                      <span className="cart_count">{totalCount} items</span>
                      <span className="cart_amount">₹{totalAmount + (totalAmount < 100 ? 25 : 0) + 4}</span>
                    </div>
                  </div>
                )
            }
          </button>
        </div>

      </header>

      <div className="nav_line">
        <nav>
          <div className="simple_a">
            <a href="">Vegetables & Fruits</a>
          </div>
          <div className='diff_a'>
            <a href="">Dairy & Breakfast</a>
          </div>
          <div className="simple_a">
            <a href="">Munchies</a>
          </div>
          <div className="simple_a">
            <a href="">Cold Drinks & Juices</a>
          </div>
          <div className="simple_a">
            <a href="">Instant & Frozen Food</a>
          </div>
          <div className="simple_a">
            <a href="">Tea, Coffee & Health Drinks</a>
          </div>
        </nav>
      </div>

      <head>
        <div className="head_top">
          <div className="arrow">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="info">
            <p>Delivery in 8 Minutes</p>
            <span>
              B62, Pocket B, South City I, Sector 30, Gurugram, Haryana 122007, India
            </span>
          </div>
          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="search_bar">
          <div className="input_search">
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            <input type="text" placeholder={placeholders[placeholderIndex]} />
          </div>
        </div>
      </head>

      <div className="head_cart">
        <button onClick={() => setIsCartOpen(true)} className='head_cart_btn'>
          {
            totalCount === 0
              ? (
                <>
                  <i className="ri-shopping-cart-2-line"></i>&nbsp;
                  View Cart
                </>
              )
              : (
                <div className='cart_btn_diff'>
                  <div className="left_btn">
                    <button>
                      <i className="ri-shopping-cart-2-line"></i>
                    </button>
                  </div>
                  <div className="center_btn">
                    <span className="cart_count">{totalCount} items</span>
                    <span className="cart_amount">₹{totalAmount + (totalAmount < 100 ? 25 : 0) + 4}</span>
                  </div>
                  <div className="right_btn">
                    <h2>View Cart <i class="fa-solid fa-caret-right"></i></h2>
                  </div>
                </div>
              )
          }
        </button>
      </div>

      {
        isCartOpen && (
          <div className="cart_main">
            <div className="cross">
              <span>My Cart</span>
              <button className="cross_btn" onClick={() => setIsCartOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="cart_product_div">
              {
                record.data && (
                  <div className='cart_top'>
                    <div className='product_bg'>
                      {
                        totalCount > 0 && (
                          <div className="time_limit">
                            <div className="img">
                              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" alt="" />
                            </div>
                            <div className="text">
                              <h3>Delivery in 8 minutes</h3>
                              <p>Shipment of {totalCount} items</p>
                            </div>
                          </div>
                        )
                      }

                      {
                        record.data.map((e, i) => (
                          e.quantity > 0 && (
                            <div key={i} className="main_cart_product">
                              <div className="img">
                                <img src={e.img} alt="" />
                              </div>
                              <div className="text">
                                <h2>{e.title}</h2>
                                <p>{e.info}</p>
                                <h3>₹{e.price}</h3>
                              </div>
                              <div className="btn">
                                {
                                  e.quantity === 0
                                    ? (
                                      <button className="simple_add" onClick={() => addItem(e.id)}>
                                        ADD
                                      </button>
                                    )
                                    : (
                                      <div className="diff_add">
                                        <button onClick={() => removeItem(e.id)}>-</button>
                                        {e.quantity}
                                        <button onClick={() => addItem(e.id)}>+</button>
                                      </div>
                                    )
                                }
                              </div>
                            </div>
                          )
                        ))
                      }
                    </div>

                    {
                      totalCount > 0 && (
                        <>
                          <div className="price_div">
                            <h2>Bill Details</h2>
                            <div className="price_flex">
                              <span><i className="ri-article-fill"></i> Items total</span>
                              <span>₹{totalAmount}</span>
                            </div>
                            <div className="price_flex">
                              <span><i className="ri-e-bike-2-fill"></i> Delivery charge <i className="ri-information-2-line"></i></span>
                              <span>{totalAmount < 100 ? "₹25" : (<><del>₹25</del> <span className='color_blue'>Free</span></>)}</span>
                            </div>
                            <div className="price_flex">
                              <span><i className="ri-shopping-bag-4-fill"></i> Handling charge <i className="ri-information-2-line"></i></span>
                              <span>₹4</span>
                            </div>
                            <div className="price_flex">
                              <h4>Grand total</h4>
                              <h4>₹{totalAmount + (totalAmount < 100 ? 25 : 0) + 4}</h4>
                            </div>
                          </div>

                          <div className='cancel_pr'>
                            <h2>Cancellation Policy</h2>
                            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                          </div>
                        </>
                      )
                    }
                  </div>
                )}
            </div>

            <div className="cart_total">
              {
                totalCount > 0 && (
                  <div className="cart_down">
                    <div className="cart_down_div">
                      <div className="left">
                        <h3>₹{totalAmount + (totalAmount < 100 ? 25 : 0) + 4}</h3>
                        <p>TOTAL</p>
                      </div>
                      <div className="right">
                        <h2>Login To Proceed <i className="fa-solid fa-angle-right"></i></h2>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
