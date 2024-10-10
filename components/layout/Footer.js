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
                                    className="widget-about font-md mb-md-3 mb-lg-3 col-lg-4 mb-xl-0"
                                    data-wow-delay="0"
                                >
                                     <h4 className="widget-title">Address</h4>
                                    
                                     <p className="font-lg text-heading">
                                        <span>1116, JMD Megapolis, Sector 48, <br/>Gurugram, Haryana 122018</span>
                                        <span><b>Tel:</b> +91 881 606 0700</span>
                                        <span><b>EMail:</b> info@silveramigo.com</span>
                                          </p>
                                    
                                    <div className="jab-mobile-social-icon">
                            
                                <a href="#" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-facebook-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                               
                                <a href="#" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-instagram-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                                <a href="#" target="_blank">
                                    <img
                                        src="/img/themepic/icons/icon-pinterest-white.svg"
                                        alt="icons"
                                        width="30" 
                                        height="30"
                                    />
                                </a>
                                
                            </div>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col-md-3 col-lg-4"
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
                                className="footer-link-widget col-md-3 col-lg-4"
                              
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
                                <strong className="text-brand">Silver Amigo</strong> - 
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
