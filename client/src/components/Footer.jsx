import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/love-gym.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" >
    <Stack  sx={{ justifyContent: 'center' , alignItems: 'center'}}  px="40px" pt="24px" gap ='20px'>
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px'}} />
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Love Fitness
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
