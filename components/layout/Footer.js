import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main" style={{background:'#dddddd',padding:'0px 0px',marginTop:'40px'}}>
                
              
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col-md-3">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0"
                                    data-wow-delay="0"
                                >
                                     <h4 className="widget-title">Address</h4>
                                    
                                     <p className="font-lg text-heading">
                                        <span>1116, JMD Megapolis, Sector 48, <br/>Gurugram, Haryana 122018</span>
                                        <span><b>Tel:</b> +91 123 456 7890</span>
                                        <span><b>EMail:</b> inf@silveramego.com</span>
                                          </p>
                                    {/* <div className="logo  mb-30">
                                        <Link href="/" className="mb-15"> 
                                            <img
                                                src="/img/themepic/jba-logo-white.png"
                                                alt="logo"
                                                width="249" height="40"
                                            />
                                         
                                        </Link>
                                        <p className="font-lg text-heading">
                                          
                                        </p>
                                    </div> */}
                                    <div className="jab-mobile-social-icon">
                            
                                <a href="https://www.facebook.com/jewelsbyanu/" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-facebook-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                                {/* <a href="#" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-twitter-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a> */}
                                <a href="https://www.instagram.com/jewelsbyanu/" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-instagram-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                                <a href="https://in.pinterest.com/Jewels_by_anu/" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-pinterest-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                                {/* <a href="#" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-youtube-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a> */}
                            </div>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col-md-3"
                            >
                                <h4 className="widget-title">Quick Links</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/about-us">About us</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/track-order">Track Order</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col-md-3"
                              
                            >
                                <h4 className="widget-title ">Quick Links</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                <li>
                                        <a href="/privacy-policy">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="/refund-policy">Refund policy</a>
                                    </li>
                                    <li>
                                        <a href="/shipping-policy">Shipping policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms-and-conditions/">Terms & Conditions</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col-md-3"
                              
                            >
                                <h4 className="widget-title ">Catelog</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Buying and Price Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Certification Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Diamond and Solitaire Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Gemstone Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Gifting Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Jewellery Care Guide</a>
                                    </li>
                                </ul>
                            </div>
                       
                           
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-10"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-10">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0 my-p" style={{color:"#000",fontSize:'13px'}}>
                                &copy; 2024,{" "}
                                <strong className="text-brand">Silver Amego</strong> - 
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
