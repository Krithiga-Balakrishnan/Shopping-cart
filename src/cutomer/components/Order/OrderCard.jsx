import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg hover:shadow-2xl border mt-10'> 
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
<div className='flex cursor-pointer'>
    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://is4.revolveassets.com/images/p4/n/tv/ONR-WZ24_V2.jpg" alt=''/>
    <div className='ml-5 space-y-2'>

        <p>
        Cloud 5 Sneaker
        </p>
        <p className='opacity-50 font-semibold text-xs'>
            Size:35-40
        </p>
        <p className='opacity-50 font-semibold text-xs'>
            color :Beige
        </p>
    </div>
</div>
            </Grid>
            <Grid item xs={2}>
                <p>$450</p>
            </Grid>

            <Grid item xs={4}>
              {true && <div><p>
                <AdjustIcon sx={{width:"15px" , height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                    <span>
                        Delivered on July 26th
                    </span>
                </p>
                <p className='text-xs'>
                    Your Item Has been delivered
                </p>
                </div> }
               {false && <p>
                    <span>
                        Expected delivery on July 03rd
                    </span>
                </p>}
            </Grid>
        </Grid>
        
    </div>
  )
}

export default OrderCard