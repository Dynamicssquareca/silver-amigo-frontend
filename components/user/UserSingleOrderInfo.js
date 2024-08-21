import React, { useState } from 'react';
import CartItemsUserReview from '../ecommerce/CartItemsUserReview';
import ProgressSteps from '../elements/ProgressSteps';



const UserSingleOrderInfo = () => {
  const steps = ['Order Confirmed', 'Shipped', 'Delivered'];

  const [progressPercent, setProgressPercent] = useState(34);  
  const handleInputChange = (e) => {
    const percent = parseInt(e.target.value);
    if (!isNaN(percent) && percent >= 0 && percent <= 100) {
      setProgressPercent(percent);
    }
  };


  return (
    <div className='order-si-in'>
      <h3>My Orders</h3>
      <span className='order-id'>Order id: LFHVNKJS450 <a href="/user/track-order/">Track Order</a></span>
      <span className='time-place'>Placed on: Placed on 10th Apr 2022</span>
      <ProgressSteps steps={steps} progressPercent={progressPercent} />
      <div className='cust-card-order'>
      <CartItemsUserReview />
      </div>
    </div>
  );
}

export default UserSingleOrderInfo;
