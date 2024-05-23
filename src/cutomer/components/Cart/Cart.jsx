import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Cart = () => {
  return (
    <div className="mt-10">
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
{[1,1,1,1].map((item)=><CartItem/>)}
    
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
      <div className='border p-4 pr-8'>
<p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
      
      <hr/>
<div className='space-y-3 font-semibold'>
  <div className='flex justify-between pt-3 text-black'>
    <span> Price</span>
    <span> $500</span>

  </div>
  <div className='flex justify-between pt-3 '>
    <span> Discount</span>
    <span className='text-green-400'> $500</span>

  </div>
  <div className='flex justify-between pt-3 text-black'>
    <span> Delivery Charge</span>
    <span className='text-green-400'> Free</span>

  </div>
  <div className='flex justify-between pt-3 text-black'>
    <span> Total Amount</span>
    <span className='text-green-500 font-bold'> $500</span>

  </div>
</div>
<div className="mt-5"> {/* Add margin-top here */}

<Button variant='contained' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", width: "100%" }}>
                                    <AttachMoneyIcon sx={{ mr: 1 }} />
                                    Add To Cart
                                </Button>
                                </div>

      </div>
     </div>
      </div>
    
    </div>
    
  )
}

export default Cart