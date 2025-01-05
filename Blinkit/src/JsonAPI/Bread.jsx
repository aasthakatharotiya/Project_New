import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addQuantity, fetchApi, removeQuantity } from '../Feature/Slice'

export default function Bread() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())
  }, [])

  const record = useSelector((state) => {
    return state.apiKey
  })

  const Product = record.data.filter(item => item.category === "Bread & Pav")

  const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }

  return (
    <div>
      <center>
        <div className="right_head">
          <h1>By Bread & Pav Online</h1>
          <div className="category_drop">
            <span>Sort By &nbsp;</span>
            <select name="" id="">
              <option value="">Relevance</option>
              <option value="">Price (Low to High)</option>
              <option value="">Price (High to Low)</option>
              <option value="">Discount (High to Low)</option>
              <option value="">Name (A to Z)</option>
            </select>
          </div>
        </div>

        <div className="pr_main">
          {
            Product &&
            Product.map((e, i) => (
              <div key={i} className="pr_div">
                <div className="pr_img position-relative">
                  {
                    e.discount === ""
                      ? (
                        <button className='simple_dis'>
                        </button>
                      )
                      : (
                        <button className="diff_dis position-absolute top-0 start-0">{e.discount}</button>
                      )
                  }
                  <img src={e.img} alt="" />
                </div>
                <div className="pr_text">
                  <h6><i class="fa-regular fa-clock"></i> &nbsp;&nbsp;{e.time}</h6>
                  <h2>{e.title}</h2>
                  <p>{e.info}</p>
                  <div className="pr_flex">
                    <div className="flex_left">
                      <h3>₹{e.price}</h3>
                      <del>₹{e.del}</del>
                    </div>

                    <div className="flex_right">
                      {
                        e.quantity === 0
                          ? (
                            <button className='simple_add' onClick={() => addItem(e.id)}>
                              ADD
                            </button>
                          )
                          : (
                            <div className='diff_add'>
                              <button onClick={() => removeItem(e.id)}>-</button>
                              {e.quantity}
                              <button onClick={() => addItem(e.id)}>+</button>
                            </div>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </center>
    </div>
  )
}
