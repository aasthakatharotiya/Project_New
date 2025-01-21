import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Feature/ApiSlice'
import { decrement } from '../Feature/ApiSlice'

export default function ReduxApi() {
    const [saveMoney, setSaveMoney] = useState("")
    const [donateMoney, setDonateMoney] = useState("")

    const [cartList, setCartList] = useState([])

    const dispatch = useDispatch()

    const count_money = useSelector((state) => state.moneyKey.count_money)

    const addMoney = () => {
        const amount = Number(saveMoney)
        if (amount) {
            dispatch(increment(amount))
            setSaveMoney("")
        }

        let budget_extra_div = document.getElementById("budget_extra_div")
        budget_extra_div.style.visibility = "hidden"

        let add_budget_div = document.getElementById("add_budget_div")
        add_budget_div.style.height = "0%"
        add_budget_div.style.transition = "1s"

        let budget_css = document.getElementById("budget_css")
        budget_css.style.visibility = "hidden"
    }

    const deleteMoney = () => {
        if (selectedProduct) {
            const price = Number(selectedProduct.price.replace('₹', ''))
            if (price) {
                if (count_money < price) {
                    alert("Insufficient money to add this item to the cart")
                    return
                }

                dispatch(decrement(price))
                setCartList([...cartList,
                {
                    cartName: selectedProduct.name,
                    cartImg: selectedProduct.img,
                    cartPrice: price,
                },
                ])
                // setSelectedProduct(null);
            }
        }
    }

    const saveDonateMoney = () => {
        const amountToDonate = Number(donateMoney);
        if (amountToDonate) {
            if (count_money < amountToDonate) {
                alert("Insufficient money to donate");
                return;
            }
            dispatch(decrement(amountToDonate));

            setTotalDonation(prev => prev + amountToDonate);
            setDonateMoney("");

            let donation_extra_div = document.getElementById("donation_extra_div")
            donation_extra_div.style.visibility = "hidden"

            let add_donation_div = document.getElementById("add_donation_div")
            add_donation_div.style.height = "0%"
            add_donation_div.style.transition = "1s"

            let donation_css = document.getElementById("donation_css")
            donation_css.style.visibility = "hidden"
        }
    }


    const [totalDonation, setTotalDonation] = useState(0)

    const handleDonation = (index) => {
        const gstRate = 0.18
        const updatedCartList = [...cartList]
        const product = updatedCartList[index]

        const gstAmount = product.cartPrice * gstRate
        setTotalDonation(gstAmount)

        updatedCartList[index].cartPrice = (product.cartPrice - gstAmount).toFixed(2)
        setCartList(updatedCartList)
    }

    const food_arr = [
        { name: "Pizza", button: "Order Now !", msg: "BUY 1, GET 1 FREE", price: "₹ 590", del: "₹ 935", img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" },
        { name: "Pasta", button: "Order Now !", msg: "20% OFF", price: "₹ 119", del: "₹ 143", img: "https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288825470/s6-53.webp/w_1200,c_limit/" },
        { name: "Burger", button: "Order Now !", msg: "BUY 2, GET 1 FREE", price: "₹ 236", del: "₹ 354", img: "https://img.freepik.com/premium-photo/horizontal-burger-restaurant_198067-244011.jpg" },
        { name: "Pani - Puri", button: "Order Now !", msg: "Unlimited", price: "₹ 119", del: "₹ 238", img: "https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6143/assets/18.jpeg?time=1647838385" },
        { name: "Gujrati Thali", button: "Order Now !", msg: "Unlimited", price: "₹ 475", del: "₹ 595", img: "https://img.freepik.com/premium-photo/classic-gujarati-thali-featuring-khadi-rotla-vari_1177965-117824.jpg" },
        { name: "Panjabi Thali", button: "Order Now !", msg: "Unlimited", price: "₹ 595", del: "₹ 953", img: "https://t4.ftcdn.net/jpg/02/28/28/15/360_F_228281535_DbxC98AAXl0TOe2TcasxiUU53s7etqox.jpg" },
        { name: "Ice - Cream", button: "Order Now !", msg: "10% OFF", price: "₹ 238", del: "₹ 476", img: "https://t3.ftcdn.net/jpg/05/81/72/02/360_F_581720227_ClzwYRAPhKsFtM0MMa87Wzl4ZEQ2kZW0.jpg" },
        { name: "Chocolate", button: "Order Now !", msg: "50% OFF", price: "₹ 119", del: "₹ 238", img: "https://img.freepik.com/premium-photo/world-chocolate-day-box-chocolates_780838-3872.jpg?w=360" },
    ]

    const beauty_arr = [
        { name: "Perfumes", button: "Order Now !", msg: "50% OFF", price: "₹ 191", del: "₹ 187", img: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5c0e60ebdcbe2.jpeg" },
        { name: "Make-Up", button: "Order Now !", msg: "20% OFF", price: "₹ 283", del: "₹ 221", img: "https://img.freepik.com/premium-photo/collection-makeup-products-including-brand-makeup_1089151-66388.jpg" },
        { name: "Eye Product", button: "Order Now !", msg: "30% OFF", price: "₹ 11.91", del: "₹ 149", img: "https://m.media-amazon.com/images/I/41GQqmxD75L._AC_UF1000,1000_QL80_.jpg" },
        { name: "Face Product", button: "Order Now !", msg: "10% OFF", price: "₹ 461", del: "₹ 557", img: "https://t4.ftcdn.net/jpg/05/97/29/71/360_F_597297121_5ggzPOAWWpwCDmpLV76teGzb9ahHxvKY.jpg" },
        { name: "Lip stick", button: "Order Now !", msg: "50% OFF", price: "₹ 96", del: "₹ 191", img: "https://media.istockphoto.com/id/1206778026/it/vettoriale/rossetto-in-diversi-colori-naturali-concetto-di-make-up-illustrazione-orizzontale.jpg?s=612x612&w=0&k=20&c=7Y4xNzzLjNO7a1nqWhV4Eejhme08VQhvXQVC7K68uSE=" },
        { name: "Nail Product", button: "Order Now !", msg: "30% OFF", price: "₹ 191", del: "₹ 149", img: "https://www.thelist.com/img/gallery/the-real-difference-between-gel-and-acrylic-nails/intro-1581519320.jpg" },
        { name: "Hair Product", button: "Order Now !", msg: "20% OFF", price: "₹ 149", del: "₹ 187", img: "https://png.pngtree.com/thumb_back/fh260/background/20230816/pngtree-a-small-table-with-several-products-and-a-hair-brush-image_13021859.jpg" },
        { name: "Facial Product", button: "Order Now !", msg: "10% OFF", price: "₹ 374", del: "₹ 470", img: "https://us.123rf.com/450wm/serezniy/serezniy2312/serezniy231207640/222620310-facial-sheet-mask-with-different-cosmetic-products-on-blue-background.jpg?ver=6" },
    ]

    const cloth_arr = [
        { name: "Women Party Wear", button: "Add To Cart", msg: "30% OFF", price: "₹ 3573", del: "₹ 4764", img: "https://cdn.shopify.com/s/files/1/0616/7209/5961/files/UntitledSession83748_600x.jpg?v=1688119714" },
        // { name: "Women Lehenga", button: "Add To Cart", msg: "50% OFF", price: "₹ 1.19", del: "₹ 2.38", img: "https://static.india.com/wp-content/uploads/2023/11/Winter-Inspired-Wedding-Outfit-8.png?impolicy=Medium_Widthonly&w=400&h=800" },
        { name: "Men Party Wear", button: "Add To Cart", msg: "40% OFF", price: "₹ 2382", del: "₹ 4764", img: "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/02/275064541_925471638154499_5063582770141409576_n-819x1024.jpg" },
        { name: "Traditional Wear Pair", button: "Add To Cart", msg: "20% OFF", price: "₹ 9529", del: "₹ 11911", img: "https://i.pinimg.com/736x/88/c4/87/88c48703eb25b9de611fcc749589a8b4.jpg" },
        { name: "Party Wear Pair", button: "Add To Cart", msg: "10% OFF", price: "₹ 10720", del: "₹ 11911", img: "https://img.mensxp.com/media/content/2023/Feb/Inside-image-2-243_63f5d4a098a6a.jpeg?w=900&h=1125&cc=1" },
        { name: "Women Suit", button: "Add To Cart", msg: "30% OFF", price: "₹ 2382", del: "₹ 3573", img: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/816/049/new_medium/Anamika.jpg?1555413704" },
        { name: "Men Suit", button: "Add To Cart", msg: "50% OFF", price: "₹ 1787", del: "₹ 3573", img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/04/24/6f2fb6452d4c1a033b1e41a41c989058da201.jpg" },
        { name: "Saree", button: "Add To Cart", msg: "10% OFF", price: "₹ 3573", del: "₹ 4764", img: "https://wallpapers.com/images/hd/kajol-in-red-saree-3kfr70qm2pd1dt3y.jpg" },
        // { name: "Saree", button: "Add To Cart", msg: "50% OFF", price: "₹ 1.19", del: "₹ 2.38", img: "https://i0.wp.com/wittyvows.com/wp-content/uploads/2018/12/IMG-4936-Copy.jpg" },
        { name: "Kurta", button: "Add To Cart", msg: "20% OFF", price: "₹ 4169", del: "₹ 5956", img: "https://i.pinimg.com/736x/eb/a2/ac/eba2ac1cc07e99ea6644c3bded7aab77.jpg" },
    ]

    const electric_arr = [
        { name: "Mobile", button: "Add To Cart", msg: "Buds FREE", price: "₹ 3573", del: "₹ 4764", img: "https://cdn.mos.cms.futurecdn.net/CtE3WTrL8UJiKT7GkaighQ-1200-80.jpg" },
        { name: "Refrigerator", button: "Add To Cart", msg: "FREE Delivery", price: "₹ 2382", del: "₹ 4764", img: "https://vcdn1-sohoa.vnecdn.net/2022/12/12/Untitled-2a2-2346-1670781124.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=LLtbtjniGaiSyHBK0HSnkg" },
        { name: "Smart Watch", button: "Add To Cart", msg: "Different Belt FREE", price: "₹ 9529", del: "₹ 11911", img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/05/Best-Smartwatch.jpg" },
        { name: "Television", button: "Add To Cart", msg: "Scratch Card", price: "₹ 10720", del: "₹ 11911", img: "https://cdn.mos.cms.futurecdn.net/U9KtmMVu8NaGYv4vN2PUX3-1200-80.jpg" },
        { name: "Oven", button: "Add To Cart", msg: "50% OFF", pprice: "₹ 2382", del: "₹ 3573", img: "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2021/02/Utilizzare-il-Forno-a-Microonde-in-Modo-Alternativo1.jpg" },
        { name: "Mixer", button: "Add To Cart", msg: "20% OFF", price: "₹ 1787", del: "₹ 3573", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mixer-grinder-juicer/n/p/6/-original-imah22bpj6myfz2f.jpeg?q=90&crop=false" },
        { name: "Washing Machine", button: "Add To Cart", msg: "Life Time Service", price: "₹ 3573", del: "₹ 47.64", img: "https://m.economictimes.com/thumb/msid-100198136,width-1600,height-900,resizemode-4,imgsize-32184/og_washing_machine.jpg" },
        { name: "Computer", button: "Add To Cart", msg: "Projector FREE", price: "₹ 4169", del: "₹ 5956", img: "https://images.pexels.com/photos/7899236/pexels-photo-7899236.jpeg" },
    ]

    const gift_arr = [
        { name: "Teddy", button: "Order Now !", msg: "50% OFF", price: "₹ 1191", del: "₹ 1787", img: "https://img.freepik.com/premium-photo/teddy-bear-with-santa-hat-sits-christmas-gift_913266-40669.jpg" },
        { name: "Show Piece", button: "Order Now !", msg: "20% OFF", price: "₹ 2383", del: "₹ 2621", img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4938a636-4799-4e06-b6c4-fdf8192e0d1d.__CR0,0,970,600_PT0_SX970_V1___.jpg" },
        { name: "Night Lamp", button: "Order Now !", msg: "30% OFF", price: "₹ 1191", del: "₹ 1549", img: "https://i.etsystatic.com/41899255/r/il/a08047/4964715384/il_340x270.4964715384_otwj.jpg" },
        { name: "Photo Frame", button: "Order Now !", msg: "20% OFF", price: "₹ 1549", del: "₹ 1787", img: "https://m.media-amazon.com/images/I/91UsjaiFNvL._AC_UF894,1000_QL80_.jpg" },
        { name: "Toys", button: "Order Now !", msg: "30% OFF", price: "₹ 1191", del: "₹ 1549", img: "https://cdn.thewirecutter.com/wp-content/media/2023/10/kids-gifts-2048px-9244.jpg?auto=webp&quality=60&width=570" },
        { name: "Chocolate", button: "Order Now !", msg: "10% OFF", price: "₹ 4961", del: "₹ 5957", img: "https://static.vecteezy.com/system/resources/previews/035/824/062/non_2x/ai-generated-box-of-assorted-chocolates-on-wooden-table-closeup-view-a-box-of-assorted-valentine-s-day-chocolates-ai-generated-free-photo.jpg" },
        { name: "Men Combo", button: "Order Now !", msg: "50% OFF", price: "₹ 596", del: "₹ 1191", img: "https://m.media-amazon.com/images/I/71QCEr+1BmL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Books", button: "Order Now !", msg: "10% OFF", price: "₹ 3574", del: "₹ 4170", img: "https://thumbs.dreamstime.com/b/books-inside-gift-box-gift-concept-d-rendering-books-inside-gift-box-gift-concept-d-rendering-isolated-white-background-103965409.jpg" },
    ]

    const [selectPr, setSelectPr] = useState("")
    const [products, setProducts] = useState(food_arr)

    const handleSelect = () => {
        if (selectPr === 'Food') {
            setProducts(food_arr)
        }
        else if (selectPr === 'Beauty') {
            setProducts(beauty_arr)
        }
        else if (selectPr === 'Cloth') {
            setProducts(cloth_arr)
        }
        else if (selectPr === 'Electronic') {
            setProducts(electric_arr)
        }
        else if (selectPr === 'Gift') {
            setProducts(gift_arr)
        }
        else {
            setProducts([])
        }
    }

    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleShowProduct = (product) => {
        let product_details = document.getElementById("product_details")
        product_details.style.display = "block"

        setSelectedProduct(product)
    }

    const handleCrossProduct = () => {
        let product_details = document.getElementById("product_details")
        product_details.style.display = "none"

        let fixed_div = document.getElementById("fixed_div")
        fixed_div.style.width = "0%"
        fixed_div.style.transition = "1s"

        let fixed_text = document.getElementById("fixed_text")
        // fixed_text.style.display ="none"
        fixed_text.style.visibility = "hidden"
        fixed_text.style.transitionDelay = "0.5s"
    }

    const add_menu = () => {
        let fixed_div = document.getElementById("fixed_div")
        fixed_div.style.width = "38%"
        fixed_div.style.transition = "1s"

        let fixed_text = document.getElementById("fixed_text")
        // fixed_text.style.display ="block"
        fixed_text.style.visibility = "visible"
    }

    const cross_fixed = () => {
        let fixed_div = document.getElementById("fixed_div")
        fixed_div.style.width = "0%"
        fixed_div.style.transition = "1s"

        let fixed_text = document.getElementById("fixed_text")
        // fixed_text.style.display ="none"
        fixed_text.style.visibility = "hidden"
        fixed_text.style.transitionDelay = "0.5s"
    }

    const handleAddBudget = () => {
        let budget_extra_div = document.getElementById("budget_extra_div")
        budget_extra_div.style.visibility = "visible"

        let add_budget_div = document.getElementById("add_budget_div")
        add_budget_div.style.height = "95%"
        add_budget_div.style.transition = "1s"

        let budget_css = document.getElementById("budget_css")
        budget_css.style.visibility = "visible"
    }

    const handleAddDonation = () => {
        let donation_extra_div = document.getElementById("donation_extra_div")
        donation_extra_div.style.visibility = "visible"

        let add_donation_div = document.getElementById("add_donation_div")
        add_donation_div.style.height = "95%"
        add_donation_div.style.transition = "1s"

        let donation_css = document.getElementById("donation_css")
        donation_css.style.visibility = "visible"
    }

    return (
        <>
            <div className="fixed_btn">
                <button onClick={add_menu}><i class="fa-solid fa-bars-staggered"></i></button>
            </div>

            <div id='fixed_div' className="fixed_div">

                <div className="fixed_text" id='fixed_text'>
                    <div className="cross_fixed">
                        <button onClick={cross_fixed}><i class="fa-solid fa-x"></i></button>
                    </div>

                    <div className='add_to_cart_pr'>
                        {cartList.map((item, index) => (
                            <div key={index} className='fix_add_cart'>
                                <div className='left_pr_div_fix'>
                                    <img src={item.cartImg} alt={item.cartName} />
                                </div>
                                <div className='right_pr_div_fix'>
                                    <h1>{item.cartName}</h1>
                                    <h3 style={{ marginTop: '-10px' }}>₹{item.cartPrice}</h3>
                                    <button onClick={() => handleDonation(index)}>Donation</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="donation">
                        <h3>Donation <br /> ₹{totalDonation.toFixed(2)}</h3>

                        <div className="img_donation">
                            {/* <img src="donation_1.png" alt="" /> */}
                            {/* <img src="https://png.pngtree.com/png-vector/20221226/ourmid/pngtree-donation-box-and-charity-concept-png-image_6538298.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='main'>
                {/* <h1>ReduxApi</h1> */}
                <div className="left_div">
                    <div className="budget_main">
                        <center>
                            <div className="budget_border">
                                <h1>Your Balance</h1>
                                <h3>{count_money}</h3>
                                <button onClick={handleAddBudget} className='budget_disp_btn'>Add Budget +</button>
                            </div>
                        </center>

                        <div className="budget_extra_div" id='budget_extra_div'>
                            <div className='add_budget_div' id='add_budget_div'>
                                <div className="budget_css" id='budget_css'>
                                    <h1>Add Budget</h1>
                                    <input value={saveMoney} type="number" placeholder='Enter Your Balance' onChange={(e) => setSaveMoney(e.target.value)} />
                                    <br />
                                    <button onClick={addMoney}>Add Budget +</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="donation_main">

                        <center>
                            <div className="donation_border">
                                <h1>Donation</h1>
                                <h3>{totalDonation.toFixed(2)}</h3>
                                <button onClick={handleAddDonation} className='donation_disp_btn'>Add Donation +</button>
                            </div>
                        </center>

                        <div className="donation_extra_div" id='donation_extra_div'>
                            <div className='add_donation_div' id='add_donation_div'>
                                <div className="donation_css" id='donation_css'>
                                    <h1>Add Donation</h1>
                                    <input value={donateMoney} type="number" placeholder='Enter Your Donation' onChange={(e) => setDonateMoney(e.target.value)} />
                                    <br />
                                    <button onClick={saveDonateMoney}>Add Donation +</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right_div">

                    <div className="category_div">
                        <h1>Select Product : </h1>
                        <select name="" id="" value={selectPr} onChange={(e) => setSelectPr(e.target.value)}>
                            {/* <option value="">Select Appropriate Option</option> */}
                            <option value="Food">Food</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Cloth">Cloth</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Gift">Gift</option>
                        </select>
                        <button onClick={handleSelect}><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="category_product">
                        <div className="show_product">
                            {products && products.length > 0
                                ? (products.map((e, i) => (
                                    <div key={i} className='arr_product' onClick={() => handleShowProduct(e)}>
                                        <div className="left_show_pr">
                                            <img src={e.img} alt="" />
                                        </div>
                                        <div className="right_show_pr">
                                            <h2>{e.name}</h2>
                                            <h3><span>{e.price}</span> <del>{e.del}</del></h3>
                                        </div>
                                    </div>
                                )))
                                : (<p>No products available for this category.</p>)
                            }
                        </div>

                        <div id='product_details' className="product_details">
                            <div className="cross">
                                <button onClick={handleCrossProduct}><i class="fa-solid fa-x"></i></button>
                            </div>

                            <center>
                                <div className="pr_detail_div">
                                    {selectedProduct && (
                                        <div className="selected_product">
                                            <div className="select_pr_image">
                                                <img src={selectedProduct.img} alt="" />
                                            </div>
                                            <h1>{selectedProduct.name}</h1>
                                            <span>{selectedProduct.msg}</span>
                                            <h3><span>{selectedProduct.price}</span> <del>{selectedProduct.del}</del></h3>
                                            <button onClick={() => { deleteMoney(); add_menu(); }} id='add_btn'>{selectedProduct.button}</button>
                                        </div>
                                    )}
                                </div>
                            </center>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}



// import React from 'react'
// import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../Feature/ApiSlice'

// export default function ReduxApi() {

//     const [saveMoney, setSaveMoney] = useState("")
//     const [cartMoney, setCartMoney] = useState("")
//     const [cartName, setCartName] = useState("")

//     const [cartList, setCartList] = useState([])

//     const dispatch = useDispatch()

//     const count_money = useSelector((state) => {
//         return state.moneyKey.count_money
//     })

//     const addMoney = () => {
//         const amount = Number(saveMoney);  // Convert input to number
//         if (amount) {
//             dispatch(increment(amount))
//             setSaveMoney("")
//         }
//     }

//     const deleteMoney = () => {
//         const add_cart = Number(cartMoney)
//         if (add_cart && cartName) {
//             dispatch(decrement(add_cart))
//             setCartList([...cartList, { cartMoney: add_cart, cartName }])
//             setCartMoney("")
//             setCartName("")
//         }
//     }

//     return (
//         <div>
//             <h1>ReduxApi</h1>

//             <div>
//                 <h3>{count_money}</h3>
//                 <input value={saveMoney} type="number" onChange={(e) => setSaveMoney(e.target.value)} />
//                 <button onClick={addMoney}>Add</button>
//             </div>


//             <div>
//                 <input value={cartMoney} type="number" onChange={(e) => setCartMoney(e.target.value)} />
//                 <input value={cartName} type="text" onChange={(e) => setCartName(e.target.value)} />
//                 <button onClick={deleteMoney}>Cart</button>

//                 {
//                     cartList &&
//                     cartList.map((e, i) => {
//                         return (<div key={i}>
//                             <h2>{e.cartMoney} {e.cartName}</h2>
//                         </div>)
//                     })
//                 }
//             </div>

//         </div>
//     )
// }
