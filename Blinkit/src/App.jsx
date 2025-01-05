import React, { useState } from 'react'
import { Provider} from 'react-redux'
import { store } from './App/Store'
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom'
import Header from './JsonAPI/Header'
import Milk from './JsonAPI/Milk'
import Bread from './JsonAPI/Bread'
import Eggs from './JsonAPI/Eggs'
import Energy from './JsonAPI/Energy'
import Muesli from './JsonAPI/Muesli'
import Oats from './JsonAPI/Oats'
import Paneer from './JsonAPI/Paneer'
import Footer from './JsonAPI/Footer'

export default function App() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>          
          <div>
            <Header/>
            <center>
              <div className="flex_div">
                <div className="left_side_div">

                  <Link to="/" className={`link_component ${activeLink === '/' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
                    </div>
                    <h1>Milk</h1>
                  </Link>

                  <Link to="/Bread" className={`link_component ${activeLink === '/Bread' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Bread')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
                    </div>
                    <h1>Bread & Pav</h1>
                  </Link>

                  <Link to="/Eggs" className={`link_component ${activeLink === '/Eggs' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Eggs')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1200_1657599895699.png" alt="" />
                    </div>
                    <h1>Eggs</h1>
                  </Link>


                  <Link to="/Energy" className={`link_component ${activeLink === '/Energy' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Energy')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" />
                    </div>
                    <h1>Energy Bars</h1>
                  </Link>

                  <Link to="/Muesli" className={`link_component ${activeLink === '/Muesli' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Muesli')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" />
                    </div>
                    <h1>Muesli & Granola</h1>
                  </Link>

                  <Link to="/Oats" className={`link_component ${activeLink === '/Oats' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Oats')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="" />
                    </div>
                    <h1>Oats</h1>
                  </Link>

                  <Link to="/Paneer" className={`link_component ${activeLink === '/Paneer' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Paneer')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" />
                    </div>
                    <h1>Paneer & Tofu</h1>
                  </Link>
                </div>

                <div className="right_side_div">
                  <Routes>
                    <Route path="/" element={<Milk />} />
                    <Route path="/Bread" element={<Bread />} />
                    <Route path="/Eggs" element={<Eggs />} />
                    <Route path="/Energy" element={<Energy />} />
                    <Route path="/Muesli" element={<Muesli />} />
                    <Route path="/Oats" element={<Oats />} />
                    <Route path="/Paneer" element={<Paneer />} />
                  </Routes>
                </div>
              </div>
            </center>
            <Footer/>
          </div>
          
        </Provider>
      </BrowserRouter>
    </div>
  )
}








// import React, { useEffect, useState } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { store } from './App/Store';
// import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
// import Header from './JsonAPI/Header';
// import Milk from './JsonAPI/Milk';
// import Bread from './JsonAPI/Bread';
// import Eggs from './JsonAPI/Eggs';
// import Energy from './JsonAPI/Energy';
// import Muesli from './JsonAPI/Muesli';
// import Oats from './JsonAPI/Oats';
// import Paneer from './JsonAPI/Paneer';
// import { fetchApi } from './Feature/Slice';

// export default function App() {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('/');
//   const dispatch = useDispatch();

//   const { data: cartData, loading } = useSelector((state) => state.Api); // Access the cart data from Redux state

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//   };

//   // Dispatch fetchApi to fetch the data when the component mounts
//   useEffect(() => {
//     dispatch(fetchApi());
//   }, [dispatch]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Provider store={store}>
//           {isCartOpen && <div className="overlay show" onClick={() => setIsCartOpen(false)}></div>}
//           <div className={`content_wrapper ${isCartOpen ? 'blur' : ''}`}>
//             <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

//             <center>
//               <div className="flex_div">
//                 <div className="left_side_div">
//                   <Link to="/" className={`link_component ${activeLink === '/' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/')}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
//                     </div>
//                     <h1>Milk</h1>
//                   </Link>

//                   <Link to="/Bread" className={`link_component ${activeLink === '/Bread' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Bread')}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
//                     </div>
//                     <h1>Bread & Pav</h1>
//                   </Link>

//                   {/* Add other links here */}
//                 </div>

//                 <div className="right_side_div">
//                   <Routes>
//                     <Route path="/" element={<Milk />} />
//                     <Route path="/Bread" element={<Bread />} />
//                     <Route path="/Eggs" element={<Eggs />} />
//                     <Route path="/Energy" element={<Energy />} />
//                     <Route path="/Muesli" element={<Muesli />} />
//                     <Route path="/Oats" element={<Oats />} />
//                     <Route path="/Paneer" element={<Paneer />} />
//                   </Routes>
//                 </div>
//               </div>
//             </center>
//           </div>

//           {isCartOpen && (
//             <div className="cart_main">
//               <div className="cross">
//                 <span>My Cart</span>
//                 <button className="cross_btn" onClick={() => setIsCartOpen(false)}>
//                   <i className="fa-solid fa-xmark"></i>
//                 </button>
//               </div>

//               <div className="cart_product_div">
//                 {loading ? (
//                   <p>Loading...</p>
//                 ) : (
//                   cartData
//                     .filter(item => item.quantity > 0) // Filter items with quantity greater than 0
//                     .map((item) => (
//                       <div key={item.id} className="cart_item">
//                         <img src={item.img} alt={item.title} />
//                         <div>
//                           <h3>{item.title}</h3>
//                           <p>{item.info}</p>
//                           <p>Price: ₹{item.price}</p>
//                           <p>Quantity: {item.quantity}</p>
//                         </div>
//                       </div>
//                     ))
//                 )}
//               </div>
//             </div>
//           )}
//         </Provider>
//       </BrowserRouter>
//     </div>
//   );
// }















// import React, { useState } from 'react'
// import { Provider } from 'react-redux'
// import Milk from './JsonAPI/Milk'
// import { store } from './App/Store'
// import Header from './JsonAPI/Header'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import Bread from './JsonAPI/Bread'
// import Eggs from './JsonAPI/Eggs'
// import Energy from './JsonAPI/Energy'
// import Muesli from './JsonAPI/Muesli'
// import Oats from './JsonAPI/Oats'
// import Paneer from './JsonAPI/Paneer'

// export default function App() {
//   const [isCartOpen, setIsCartOpen] = useState(false)

//   return (
//     <div>
//       <BrowserRouter>
//         <Provider store={store}>
//           <div className={`content_wrapper ${isCartOpen ? 'blur' : ''}`}>
//             <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

//             <center>
//               <div className="flex_div">
//                 <div className="left_side_div">
//                   <Link to="/">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
//                       </div>
//                       <h1>Milk</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Bread">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
//                       </div>
//                       <h1>Bread & Pav</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Eggs">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1200_1657599895699.png" alt="" />
//                       </div>
//                       <h1>Eggs</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Energy">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" />
//                       </div>
//                       <h1>Energy Bars</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Muesli">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" />
//                       </div>
//                       <h1>Muesli & Granola</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Oats">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="" />
//                       </div>
//                       <h1>Oats</h1>
//                     </div>
//                   </Link>

//                   <Link to="/Paneer">
//                     <div className='link_component'>
//                       <div className="link_img">
//                         <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" />
//                       </div>
//                       <h1>Paneer & Tofu</h1>
//                     </div>
//                   </Link>
//                 </div>

//                 <div className="right_side_div">
//                   <Routes>
//                     <Route path='/' element={<Milk />}></Route>
//                     <Route path='/Bread' element={<Bread />}></Route>
//                     <Route path='/Eggs' element={<Eggs />}></Route>
//                     <Route path='/Energy' element={<Energy />}></Route>
//                     <Route path='/Muesli' element={<Muesli />}></Route>
//                     <Route path='/Oats' element={<Oats />}></Route>
//                     <Route path='/Paneer' element={<Paneer />}></Route>
//                   </Routes>
//                 </div>
//               </div>
//             </center>
//           </div>


//           {isCartOpen && (
//             <div className="cart_main">
//               <div className="cross">
//                 <span>My Cart</span>
//                 <button className="cross_btn" onClick={() => setIsCartOpen(false)}>
//                   <i className="fa-solid fa-xmark"></i>
//                 </button>
//               </div>

//             </div>
//           )}
//         </Provider>
//       </BrowserRouter>
//     </div>
//   )
// }




















// import React, { useState } from 'react'
// import { Provider } from 'react-redux'
// import { store } from './App/Store'
// import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom'
// import Header from './JsonAPI/Header'
// import Milk from './JsonAPI/Milk'
// import Bread from './JsonAPI/Bread'
// import Eggs from './JsonAPI/Eggs'
// import Energy from './JsonAPI/Energy'
// import Muesli from './JsonAPI/Muesli'
// import Oats from './JsonAPI/Oats'
// import Paneer from './JsonAPI/Paneer'

// export default function App() {
//   const [isCartOpen, setIsCartOpen] = useState(false)

//   return (
//     <div>
//       <BrowserRouter>
//         <Provider store={store}>
//           <div className={`content_wrapper ${isCartOpen ? 'blur' : ''}`}>
//             <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

//             <center>
//               <div className="flex_div">
//                 <div className="left_side_div">
//                   <NavLink to="/" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
//                     </div>
//                     <h1>Milk</h1>
//                   </NavLink>

//                   <NavLink to="/Bread" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
//                     </div>
//                     <h1>Bread & Pav</h1>
//                   </NavLink>

//                   <NavLink to="/Eggs" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1200_1657599895699.png" alt="" />
//                     </div>
//                     <h1>Eggs</h1>
//                   </NavLink>

//                   <NavLink to="/Energy" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" />
//                     </div>
//                     <h1>Energy Bars</h1>
//                   </NavLink>

//                   <NavLink to="/Muesli" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" />
//                     </div>
//                     <h1>Muesli & Granola</h1>
//                   </NavLink>

//                   <NavLink to="/Oats" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="" />
//                     </div>
//                     <h1>Oats</h1>
//                   </NavLink>

//                   <NavLink to="/Paneer" className={({ isActive }) => isActive ? 'link_component active-link' : 'link_component'}>
//                     <div className="link_img">
//                       <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" />
//                     </div>
//                     <h1>Paneer & Tofu</h1>
//                   </NavLink>
//                 </div>

//                 <div className="right_side_div">
//                   <div className="right_head">
//                     <h1>By Online</h1>
//                     <div className="category_drop">
//                       <span>Sort By &nbsp;</span>
//                       <select name="" id="">
//                         <option value="">Relevance</option>
//                         <option value="">Price (Low to High)</option>
//                         <option value="">Price (High to Low)</option>
//                         <option value="">Discount (High to Low)</option>
//                         <option value="">Name (A to Z)</option>
//                       </select>
//                     </div>
//                   </div>

//                   <Routes>
//                     <Route path="/" element={<Milk />} />
//                     <Route path="/Bread" element={<Bread />} />
//                     <Route path="/Eggs" element={<Eggs />} />
//                     <Route path="/Energy" element={<Energy />} />
//                     <Route path="/Muesli" element={<Muesli />} />
//                     <Route path="/Oats" element={<Oats />} />
//                     <Route path="/Paneer" element={<Paneer />} />
//                   </Routes>
//                 </div>
//               </div>
//             </center>
//           </div>

//           {isCartOpen && (
//             <div className="cart_main">
//               <div className="cross">
//                 <span>My Cart</span>
//                 <button className="cross_btn" onClick={() => setIsCartOpen(false)}>
//                   <i className="fa-solid fa-xmark"></i>
//                 </button>
//               </div>
//             </div>
//           )}
//         </Provider>
//       </BrowserRouter>
//     </div>
//   )
// }
















