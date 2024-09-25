
import React, { useEffect, useState } from "react";
import LogoutButton from "../user/UserLogout";
import Offcanvas from "../ecommerce/Offcanvas";
import OffcanvasContentTop from "../ecommerce/OffcanvasContentTop";
import AppURL from "@/pages/api/AppUrl";
const Header = ({ toggleClick, categogry
}) => {
    
    const [scroll, setScroll] = useState(0);
    const [token, setToken] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
          const localToken = localStorage.getItem("authToken");
          setToken(localToken);
        }
      }, []);

      useEffect(() => {
        fetchCartCount();  
    }, []);

    const fetchCartCount = async () => {
        try {
            const response = await fetch(AppURL.UserCart, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setCartCount(data.cartCount);  
        } catch (error) {
            console.error("Error fetching cart count:", error);
        }
    };

    const [activeId, setActiveId] = useState(null);
    const closeOffcanvas = () => setActiveId(null);

    return (
        <>
    
      <Offcanvas 
        id="offcanvasTop" 
        activeId={activeId} 
        setActiveId={setActiveId} 
        position="top"
      >
        <OffcanvasContentTop closeOffcanvas={closeOffcanvas} />
      </Offcanvas>
            <header className="header-area jba-header">
                <div className="Jba-header-top  d-none d-lg-block">
                    <div className="container">
                        <div className="Jba-header-wrap">
                            <div className="jba-header-right">
                                <div className="jba-header-action-right">
                                    <div className="hotline d-none d-lg-flex">
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
                            <div className="logo jba-logo-width d-block">
                                <a href="/">

                                    <img
                                        src="/img/Silver-amigo-wb-logo.png"
                                        alt="Silver-amigo-wb-logo"
                                    />

                                </a>
                            </div>


                            <div className="jba-header-action-right">
                                <div className="header-nav d-none d-lg-flex">
                                    <div className="jab-menu jab-menu-padding jab-menu-lh-2 d-none d-lg-block  font-heading">
                                        <nav>
                                            <ul>
                                                {categogry && categogry.map((item, i) => (
                                                    <li key={i}>
                                                        <a href={`/collections/${item.slug}`}>{item.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="jab-header-pic">
                                    <div className="jba-header-action-icon">
                                        <a href="/cart/" className="mini-cart-icon">
                                            <img src="/img/themepic/icons/icon-cart.svg" alt="Silver Amigo - Cart"/>
                                            <span className="pro-count blue">{cartCount}</span>
                                        </a>
                                    </div>

                                    <div className="jba-header-action-icon">
                                            {token ? (
                                            <>
                                            <a href="/user/dashboard/">
                                            <img className="svgInject" alt="Account" src="/img/themepic/icons/icon-user.svg" />
                                            <span className="lable">Account</span></a>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                            <ul>
                                            <li>
                                            <a href="/user/dashboard/"><i className="fi fi-rs-user mr-10"></i> Dashboard</a>
                                            </li>
                                            <li>
                                            <LogoutButton />
                                            </li>
                                            </ul>
                                        </div>
                                        </>
                                    ) : (
                                    <a href="/user/login">
                                    <img className="svgInject" alt="Login" src="/img/themepic/icons/icon-user.svg" />
                                    <span className="lable">Login</span>
                                    </a>
                                     )}
                                </div>
                                </div>
                            </div>



                            <div className="jba-header-action-right d-block d-lg-none">
                                <div className="jab-header-pic">
                                     
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
