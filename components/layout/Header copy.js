import Link from "next/link";
import React, { useEffect, useState } from "react";
import AppURL from "../../pages/api/AppUrl";
import Search from "../ecommerce/Search";
const Header = ({ toggleClick, categogry
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [data, setData] = useState();
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });


    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area jba-header">
                <div className="Jba-header-top  d-none d-lg-block">
                    <div className="container">
                        <div className="Jba-header-wrap">
                            <div className="logo jba-logo-width">
                                <a href="/">

                                    <img
                                        src="/img/themepic/jbalogo.png"
                                        alt="logo"
                                        width="180"
                                        height="40"
                                    />

                                </a>
                            </div>
                            <div className="jba-header-right">
                                <div className="jba-search-head">
                                    <Search />
                                </div>
                                <div className="jba-header-action-right">
                                    <div className="hotline d-none d-lg-flex">
                                        <img
                                            src="/img/themepic/icons/icon-headphone.svg"
                                            alt="hotline"
                                        />

                                        <p>
                                            <a href="tel:+91 8059102341"> +91 805 910 2341</a><span>24/7 Support</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="Jba-header-wrap header-space-between position-relative">
                            <div className="logo jba-logo-width d-block d-lg-none">
                                <a href="/">

                                    <img
                                        src="/img/themepic/jbalogo.png"
                                        alt="logo"
                                    />

                                </a>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="jab-menu jab-menu-padding jab-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li className="position-static">
                                                <Link href="/">Home</Link>
                                            </li>

                                            <li className="position-static">
                                                <Link href="/products/">

                                                    Shop All


                                                </Link>
                                            </li>

                                            {categogry && categogry.map((item, i) => (

                                                <li key={i}>

                                                    <a href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}> {item.category_name}    <i className="bi bi-chevron-down"></i></a>

                                                    <ul className="sub-menu">

                                                        {item.sub_categories && item.sub_categories.map((items, j) => (

                                                            <li key={j}> <a href={`/subcategory/${items.subcategory_name}-${item.category_name}`.toLowerCase().split(" ").join("-")}>{items.subcategory_name} </a></li>

                                                        ))}

                                                    </ul>





                                                </li>

                                            ))}

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="jba-header-action-right">
                                    <div className="jab-header-pic">
                                        <div className="jba-header-action-icon">
                                            <a href="/wishlist/">
                                                
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/img/themepic/icons/icon-compare.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                      2
                                                    </span> 
                                                 
                                            </a>
                                            <a href="/wishlist/">
                                                <span className="lable">
                                                    Wishlist
                                                </span>
                                            </a>
                                        </div>
                                        <div className="jba-header-action-icon">
                                            <a href="/cart/" className="mini-cart-icon">
                                                    <img
                                                        alt="Evara"
                                                        src="/img/themepic/icons/icon-cart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                      5
                                                    </span> 
                                                </a>
                                           
                                            <a href="/cart/">
                                                 
                                                    <span className="lable">
                                                        Cart
                                                    </span>
                                               
                                            </a>
                                        </div>

                                        <div className="jba-header-action-icon">
                                            <a href="/page-account"> 
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/img/themepic/icons/icon-user.svg"
                                                />
                                            </a> 
                                            <a href="/user/dashboard/"> 
                                                <span className="lable">
                                                    Account
                                                </span>
                                            </a> 
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <a href="/user/dashboard/">
                                                            
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                Dashboard
                                                            </a> 
                                                    </li>
                                                    <li>
                                                        <a href="/user/login">
                                                        <i className="fi fi-rs-location-alt mr-10"></i>
                                                        Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/login/"> 
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            Sign out
                                                        </a> 
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="jba-header-action-right d-block d-lg-none">
                                <div className="jab-header-pic">
                                    <div className="jba-header-action-icon">
                                        <Link href="">

                                            <img
                                                alt="Evara"
                                                src="/img/themepic/icons/icon-compare.svg"
                                            />
                                            <span className="pro-count blue">
                                                2
                                            </span>

                                        </Link>
                                    </div>

                                    <div className="jba-header-action-icon">
                                        <Link href="" className="mini-cart-icon">

                                            <img
                                                alt="Evara"
                                                src="/img/themepic/icons/icon-cart.svg"
                                            />
                                            <span className="pro-count blue">
                                                3
                                            </span>

                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">

                                                            <img
                                                                alt="Evara"
                                                                src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Earrings.png"
                                                            />

                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                Pearl Diamond Ring
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            ₹3000
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">

                                                            <i className="fi-rs-cross-small"></i>

                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">

                                                            <img
                                                                alt="Evara"
                                                                src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Earrings.png"
                                                            />

                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                Pearl Diamond Ring
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            ₹3000
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">

                                                            <i className="fi-rs-cross-small"></i>

                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>₹6000</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="">
                                                        View cart
                                                    </Link>
                                                    <Link href="">
                                                        Checkout
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jba-header-action-icon d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Header;
