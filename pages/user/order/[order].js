import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserSideBar from '../../../components/user/UserSideBar';
import UserSingleOrderInfo from '../../../components/user/UserSingleOrderInfo';
import AppURL from '@/pages/api/AppUrl';

const Order = () => {
  const router = useRouter();
  const { order } = router.query; 
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!order) return; 
    const fetchOrderDetails = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/user/login');
        return;
      }

      try {
        const url = AppURL.UserOrderDetails(order);
        console.log('Fetching order details from:', url); 
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
         
          router.push('/user/login');
          return;
        }

        if (!response.ok) {
          console.error('Response status:', response.status); 
          throw new Error('Failed to fetch order details');
        }

        const data = await response.json();
        if (data.status === 1) {
          setOrderDetails(data.data);
        } else {
          setError('Failed to fetch order details.');
        }
      } catch (error) {
        console.error('Error fetching order details:', error);  
        setError('Error fetching order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [order]);  

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!orderDetails) {
    return <div>No order found.</div>;
  }

  return (
    <>
      <Head>
        <title>Order Details | Silver Amigo</title>
        <meta name="description" content="Order Details Page" />
      </Head>
      <div className="page-header breadcrumb-wrap mb-50">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span>User
            <span></span>Order
            <span></span>{order}
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xxl-9 m-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="commen-side-head">
                    <h1>My Account</h1>
                  </div>
                </div>
                 <div className="col-lg-8  col-md-8 col-sm-12 order-md-2">
                  <UserSingleOrderInfo order={orderDetails} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 order-md-1">
                  <UserSideBar />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;