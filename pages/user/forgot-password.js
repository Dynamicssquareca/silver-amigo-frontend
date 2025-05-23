import React , { useState } from 'react';
import BottomServiceList from '../../components/elements/BottomServiceList';
import Head from "next/head";
import AppURL from '../api/AppUrl';



const ForgotPassword = () => {
    const API_URL = AppURL.UserForgotPassword;
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        setIsSubmitting(true);
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if (data) {
                setMessage(data.message);
            } else {
                setMessage("Something went wrong. Please try again.");
                 
            }
        } catch (error) {
            console.error('An error occurred', error);
            setMessage('An error occurred. Please try again later.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div>
    <Head>
      <title>Forgot Password | Silver Amigo</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
             
            <section className='ptb-60'>
                <div className='container'>
                   <div className='row g-0 bg0'>
                   <div className='col-lg-6 pt-40'>
                        <div className='jba-login-page'>
                            <div className='jab-log-form'>
                                <h3>Enter Registered mail id</h3>
                                <form onSubmit={handleSubmit}>
                                <input
                                type="email"
                                placeholder="Email ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                               {errors.email && <p className='error'>{errors.email}</p>}
                               {message && <p className='message'>{message}</p>}
                                <p><a href="/user/login/" className='forget'>Login</a></p>
                                <button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                                 {isSubmitting ? 'Please wait...' : 'Submit'} 
                                </button>
                                </form>
                                <div className='more-opt'>
                                    <p>New to Silver Amigo ?  <a href="/user/registration/">Create an Account</a></p>
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

export default ForgotPassword;
