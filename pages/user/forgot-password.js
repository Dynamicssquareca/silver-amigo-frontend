import React from 'react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import BottomServiceList from '../../components/elements/BottomServiceList';
import Link from 'next/link';
import Head from "next/head";



const Login = () => {
    return (
        <div>
               <Head>
      <title>Forgot Password | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
            <Breadcrumb />
            <section className='ptb-60'>
                <div className='container'>
                   <div className='row g-0 bg0'>
                   <div className='col-lg-6 pt-40'>
                        <div className='jba-login-page'>
                            <div className='jab-log-form'>
                                <h3>Enter Registered mail id</h3>
                                <form>
                                <input
                                type="email"
                                placeholder="Email ID"
                                />
                                
                                <p><a href="/user/login/" className='forget'>Login</a></p>
                                 <button type="submit" className="btn btn-warning">Submit</button>
                                </form>
                                <div className='more-opt'>
                                    <p>New to JewelsByAnu ?  <a href="/user/registration/">Create an Account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='jba-login-page-img'>
                         <img src='/img/login/login-pic.png' alt='login-img' />
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <BottomServiceList />
        </div>
    );
}

export default Login;
