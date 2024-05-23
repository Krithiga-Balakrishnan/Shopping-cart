import { IconButton } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
<div className='flex items-center'>
    <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
        <img className='w-full h-full object-cover object-bottom' src='https://is4.revolveassets.com/images/p4/n/tv/VEJA-WZ40_V2.jpg' alt=''
/>
    </div>

    <div className='ml-5 space-y-1'>
<p className='font-semibold'>Ladies Shoes</p>
<p className='font-semibold'>Size 35-40</p>
<p className='font-semibold'>Seller : Ronaldo</p>
<div className='flex space-x-5 items-center text-gray-900 pt-6'>
    <p className='font-semibold'>$199</p>
    <p className='opacity-50 line-through'>$250</p>
    <p className='text-green-600 font-semi-bold'>10% off</p>
</div>
    </div>

  

</div>
<div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
            <IconButton sx={{color:"RGB(247, 173, 186)"}}>
                <RemoveCircleIcon/>
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>3          </span>
            <IconButton sx={{color:"RGB(132, 3, 252)"}}>
                <AddCircleOutlineIcon/>
            </IconButton>
   
        </div>
        <div>
            <Button>
                remove
            </Button>
        </div>
    </div>
    </div>
  )
}

export default CartItem