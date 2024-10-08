import React, { useState } from 'react';
import AppURL from '@/pages/api/AppUrl';
import UserTrackOrderDetails from './UserTrackOrderDetails';  
 

const UserAccTrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [OrderError, setOrderError] = useState('');
    const [loading, setLoading] = useState(false);
 

    const OnhandleSubmit = async (event) => {
        event.preventDefault();

        if (!orderId.trim()) {
            setOrderError('Order ID cannot be empty.');
            return;
        }

        setLoading(true);
        setOrderError('');  

        try {
            const response = await fetch(AppURL.UserTrackOrder(orderId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
            });

            if (!response) {
                const errorText = await response.text();  
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const result = await response.json();

            if (result.status === 1 && result.data) {
                
                const { cartData } = result.data;
                const a = cartData?.getsalesdetailchild
                console.log(a.length)
                setOrderDetails(cartData);
            } else {
                setOrderError('Order not found. Please check your Order ID.');
            }
        } catch (error) {
            console.error('An error occurred', error);
            setOrderError('Order not found. Please check your Order ID.');
            setOrderDetails(null)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='user-track'>
                <h3>Track Order</h3>
                <div className="mb-3 form-track">
                    <form onSubmit={OnhandleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="OrderId"
                            placeholder="Enter Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <input
                            type='submit'
                            className='btn btn-md'
                            value={loading ? "Submitting..." : "Submit"}
                            disabled={loading}
                        />
                    </form>
                    {OrderError && <div className="error-msg">{OrderError}</div>}
                </div>
                {orderDetails && (
                    <UserTrackOrderDetails
                        items={orderDetails?.getsalesdetailchild}  
                        address={orderDetails} Subtotal={orderDetails} 
                        order={orderDetails}
                    />
                )}
            </div>
        </>
    );
};

export default UserAccTrackOrder;