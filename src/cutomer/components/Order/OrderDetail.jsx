// OrderDetail.jsx
import React from 'react';
import DeliveryAddressCard from '../DeliveryAdressCard/DeliveryAddressCard';
import OrderTracker from './OrderTracker';
import {Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarHalfIcon from '@mui/icons-material/StarHalf';



const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20 mt-10'>
      <div>
        <h1 className='font-bold text-xl py-10 text-left'>Delivery Address</h1>
        <DeliveryAddressCard />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>

      <Grid container className='space-y-5'>
        {[1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>

<Grid item xs={6}>
  <div className='flex items-center space-x-2' >
    <img className=" w-[8rem] h-[8rem] object-cover object-top" src="https://is4.revolveassets.com/images/p4/n/ct/BEIS-WY25_V1.jpg" alt=""/>
    <div className='space-y-2 ml-5 text-left '>
      <p  className='font-semibold'>
      The Backpack
      </p>
      <p className='space-x-5 opacity-50 text-xs font-semibold'>
      <span>
        Color: Gold
        </span>
        <span>
        Size: One Size
        </span>
      </p>
      <p>
      $ 194.27
      </p>
    </div>
  </div>
</Grid>
<Grid item xs={1}>
      <Box sx={{ display: 'flex', alignItems: 'center', color: deepPurple[500]}}>
        <StarHalfIcon sx={{fontSize:"2.5rem", paddingRight: '0.5rem'}} />
        <span>Rate & Review Product</span>
      </Box>
    </Grid>
</Grid>)}
       

      </Grid>
    </div>
  );
}

export default OrderDetail;
