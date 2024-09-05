import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import BottomServiceList from "../../components/elements/BottomServiceList";
import Head from "next/head";
import AppURL from "../api/AppUrl";


const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    captcha: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha()); 
  useEffect(() => {
    
    setCaptcha(generateCaptcha());
  }, []);

  const fetchCaptcha = () => {
    
    setCaptcha(generateCaptcha());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.password_confirmation) newErrors.password_confirmation = "Passwords do not match";
    if (!formData.captcha) newErrors.captcha = "Captcha is required";
    else if (formData.captcha !== captcha) newErrors.captcha = "Captcha is incorrect";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
       
      const response = await fetch(AppURL.UserRegisteration, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        
        const errorData = await response.json();
        setErrorMessage(errorData.message || "An unexpected error occurred. Please try again.");
        return;
      }

      const responseData = await response.json();
       console.log(responseData);
       
      setSuccessMessage("Registration successfully!");
      
     

      
      setFormData({ name: "", email: "", mobile: "", password: "", password_confirmation: "", captcha: "" }); 
      fetchCaptcha(); 
    } catch (error) {
       
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>New Registration | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      
      <Breadcrumb />
      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6">
              <div className="jba-login-page jba-registraion-page">
                <div className="jab-log-form jab-regi-form">
                  <h3>
                    Create an account <br />
                    <span>
                      {" "}
                      Already have an account?{" "}
                      <a href="/user/login/">
                        Log in
                      </a>
                    </span>
                  </h3>
                  <p></p>
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email ID"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && <p>{errors.mobile}</p>}
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          {errors.password && <p>{errors.password}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                          />
                          {errors.password_confirmation && <p>{errors.password_confirmation}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="text"
                            name="captcha"
                            placeholder="Enter Captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                          />
                          {errors.captcha && <p>{errors.captcha}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="text"
                            className="inner-2"
                            placeholder={captcha}  
                            readOnly
                          />
                          <button type="button" onClick={fetchCaptcha}>Refresh Captcha</button> {/* Refresh CAPTCHA */}
                        </div>
                      </div>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                    <button type="submit" className="btn btn-warning" disabled={loading}>
                      {loading ? "Registering..." : "Signup"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="jba-login-page-img">
                <img src="/img/login/login-pic.png" alt="login-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomServiceList />
    </div>
  );
};

export default Registration;