import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer_main">
                    <div className="links">
                        <h3>Useful Links</h3>

                        <div className="link_div">
                            <div className="left">
                                <p>About</p>
                                <p>Career</p>
                                <p>Blog</p>
                                <p>Press</p>
                                <p>Lead</p>
                                <p>Value</p>
                            </div>

                            <div className="center">
                                <p>Privacy</p>
                                <p>Terms</p>
                                <p>FAQs</p>
                                <p>Security</p>
                                <p>Mobile</p>
                                <p>Contact</p>
                            </div>

                            <div className="right">
                                <p>Partner</p>
                                <p>Franchise</p>
                                <p>Seller</p>
                                <p>Warehouse</p>
                                <p>Deliver</p>
                                <p>Resources</p>
                            </div>
                        </div>
                    </div>

                    <div className="categories">
                        <h3>Categories <span>see all</span></h3>

                        <div className="categories_div">
                            <div className="left">
                                <p>Vegetables & Fruits</p>
                                <p>Cold Drinks & Juices</p>
                                <p>Bakery & Biscuits</p>
                                <p>Dry Fruits, Masala & Oil</p>
                                <p>Paan Corner</p>
                                <p>Pharma & Wellness</p>
                                <p>Ice Creams & Frozen Desserts</p>
                                <p>Beauty & Cosmetics</p>
                                <p>Electronics & Electricals</p>
                                <p>Toys & Games</p>
                            </div>

                            <div className="center">
                                <p>Dairy & Breakfast</p>
                                <p>Instant & Frozen Food</p>
                                <p>Sweet Tooth</p>
                                <p>Sauces & Spreads</p>
                                <p>Organic & Premium</p>
                                <p>Cleaning Essentials</p>
                                <p>Personal Care</p>
                                <p>Magazines</p>
                                <p>Stationery Needs</p>
                                <p>Print Store</p>
                            </div>

                            <div className="right">
                                <p>Munchies</p>
                                <p>Tea, Coffee & Health Drinks</p>
                                <p>Atta, Rice & Dal</p>
                                <p>Chicken, Meat & Fish</p>
                                <p>Baby Care</p>
                                <p>Home & Office</p>
                                <p>Pet Care</p>
                                <p>Fashion & Accessories</p>
                                <p>Books</p>
                                <p>Navratri Specials</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer_info">
                    <div className="left">
                        <span>© Blink Commerce Private Limited, 2016-2025</span>
                    </div>
                    <div className="center">
                        <span>Download App</span>
                        <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
                        <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
                    </div>
                    <div className="right">
                        <button><i class="fa-brands fa-facebook-f"></i></button>
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        <button><i class="fa-brands fa-linkedin-in"></i></button>
                        <button><i class="fa-solid fa-at"></i></button>
                    </div>
                </div>

                <div className="footer_line">
                    <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
                </div>
            </footer>
        </div>
    )
}
