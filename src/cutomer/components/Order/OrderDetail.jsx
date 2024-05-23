// OrderDetail.jsx
import React from 'react';
import DeliveryAddressCard from '../DeliveryAdressCard/DeliveryAddressCard';


const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20 mt-10'>
      <div>
        <h1 className='font-bold text-xl py-10 text-left'>Delivery Address</h1>
        <DeliveryAddressCard />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default OrderDetail;
