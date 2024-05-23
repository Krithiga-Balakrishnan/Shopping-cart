import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className='space-y-2'>
          <div className='flex flex-col items-start'>
              <p className='font-semibold text-lg'>FirstName</p>
              <p className='opacity-50'>Date</p>
            </div>
          </div>
          <div className='flex flex-col items-start'> {/* Add this div */}

          <Rating value={4.5} name='half-Rating' />
          </div>
          <p className='flex flex-col items-start'>
            Description dkfldfkmldmkdflmvkdfkdf dsndklsmdls;mflsd; ldaskjdlkslks
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard