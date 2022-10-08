import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/plank-banner.jpg';

const HeroBanner = () => {
  return (
    <Box 
        sx={{ mt:{lg: '212px', xs: '70px'}, ml:{sm: '50px'}}}
        position='relative'
        p='20px'
    >
        <Typography color="#FF2625" fontSize="26px" fontWeight="600">
            Love Fitness
        </Typography>
        <Typography 
            sx={{ 
                fontSize: {xs: '30px', sm: '40px', lg: '50px'}, 
                fontWeight: '700', 
                lineHeight: '1.2', 
                mt: '30px', 
                mb: '23px',                
            }}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor: '#FF2625', padding: '10px'}}>
            Explore Exercises
        </Button>
        <Typography 
            fontWeight={600}
            fontSize='200px'
            color='#FF2625'
            sx={{ 
                opacity: 0.1, 
                display: {xs: 'none', lg: 'block'}, 
                }}
            >
            Exercise
        </Typography>
        <img src={BannerImage} alt='plank-banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner