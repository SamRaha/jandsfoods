import React from "react";
import Footer from "../components/Footer";
import "./Products.scss";
import RightLeaves from "../assets/Right-Leaves.svg";
import LeftLeaves from "../assets/Left-Leaves.svg";

function Products() {
    return (
        <>
            <div className="products-container">
                <div className="clear"></div>
                <div className="products-header">
                    <img src={LeftLeaves} className="left-leaves" alt="leftleaves" />
                    <h1>Our Products</h1>
                    <img src={RightLeaves} className="right-leaves" alt="rightleaves" />
                    <p>Our adaptable service means we can source almost any product you’re looking for, so even if you don’t see what you need on our list of products, just give us a call or email us and we will be able to help. </p>
                </div>
                <div className="products-block-container">
                    <div className="products-block">
                        <div className="products-image-block restaurants"></div>
                        <div className="products-text-block">
                            <h3>Restaurants</h3>
                            <p>We have worked closely with small restaurants to multi-site restaurant groups throughout the years. We stock a range of quality products that have been sourced to meet our varying customer’s needs and new trends.</p>
                            <a href="/Restaurant_Product_List.pdf" download>
                                View Menu
                            </a>
                        </div>
                    </div>
                    <div className="products-block">
                        <div className="products-text-block">
                            <h3>Schools</h3>
                            <p>Working closely with an array of primary, secondary and further education establishments has resulted in us stocking a range of school compliant products alongside the core products schools frequently use.</p>
                            <a href="/School_Product_List.pdf" download>
                                View Menu
                            </a>
                        </div>
                        <div className="products-image-block schools"></div>
                    </div>
                    <div className="products-block">
                        <div className="products-image-block cafes"></div>
                        <div className="products-text-block">
                            <h3>Cafes</h3>
                            <p>
                                Cafes have been J and S’s bread and butter since day one. We are proud to stock some of the best wholesale food goods to meet your café’s needs. Working closely with a diverse range of cafes, we can guarantee we stock
                                what you require.
                            </p>
                            <a href="/Cafe_Product_List.pdf" download>
                                View Menu
                            </a>
                        </div>
                    </div>
                    <div className="products-block">
                        <div className="products-text-block">
                            <h3>Vegan/ Speciality</h3>
                            <p>
                                We pride ourselves on sourcing food goods that many other suppliers cannot provide. Our close working relationships with our suppliers has enabled us to provide an extensive range of vegan and plant based foods.
                                Speciality dietary food products are available from gluten free, lactose free and nut free to assist with menu choices.
                            </p>
                            <a href="/Vegan_Speciality_Product_List.pdf" download>
                                View Menu
                            </a>
                        </div>
                        <div className="products-image-block vegan"></div>
                    </div>
                    <div className="products-block last">
                        <div className="products-image-block festival"></div>
                        <div className="products-text-block">
                            <h3>Festival/Street Food</h3>
                            <p>
                                We have been supplying mobile caterers for decades now, from vendors at The Leeds Festival and The Yorkshire Show to food vans at various sporting and music events or speciality vendors in The Trinity Kitchen. Rest
                                assured we can work closely with you to provide food items to meet your businesses needs.
                            </p>
                            <a href="/Festival_Street_Food_Product_List.pdf" download>
                                View Menu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;
