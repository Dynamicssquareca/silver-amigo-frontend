
import React from "react";
import CartItems from "components/ecommerce/CartItems";
import CartTotal from "components/ecommerce/CartTotal";
import Head from "next/head";

const Cart = () => {
  return (
    <>
         <Head>
      <title>Cart | Silver Amigo</title>
        <meta name="description" content="Silver Amigo dives into the spirit of everyday celebration, reflecting on the ethos of luxury through minimal gold jewelry." />
      </Head>
      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
           
              <a href="/">Home</a>
            
            <span></span>Shop
            <span></span>Cart
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="cart-righ-b">
                  <h1 className="heading-cart">Your Cart</h1>
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div><CartTotal /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
