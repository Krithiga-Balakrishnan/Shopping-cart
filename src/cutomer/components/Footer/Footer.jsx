import { Grid, Typography, Button, Link} from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black", color:"white", py:3}}
        
        >

<Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Main Menu </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Women </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Men </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Kids </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Home & Decor </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Personal care </Button>
          </div>
        </Grid>

 <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Company </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>About </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Blog </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Press </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Jobs </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Partners </Button>
          </div>
        </Grid>

        {/* Repeat the same structure for the remaining Grid items */}
     

        {/* Repeat the same structure for the remaining Grid items */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>GET IN TOUCH </Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>care@ficaso.lk </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Open hours : 8:30AM - 06:00PM</Button>
          </div>
                 
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>QUICK LINKS</Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Privacy & Policy </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Terms & Conditions</Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom>Delivery Details</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom>FAQ</Button>
          </div>
                 
        </Grid>
        <Grid className='pt-20' item xs={12} >
<Typography variant="body2" component="p" align="center">
&copy; 2023 My Company. All rights reserved.
</Typography>
<Typography variant="body2" component="p" align="center">
Made with love by Me.
</Typography>
<Typography variant="body2" component="p" align="center">
Icons made by{' '}
<Link href="https://www.freepik.com" color="inherit" underline="always">
Freepik
</Link>{' '}
from{' '}
<Link href="https://www.flaticon.com/" color="inherit" underline="always">
    www.flaticon.com
    </Link>
</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer