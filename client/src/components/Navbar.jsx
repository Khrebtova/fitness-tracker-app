import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { Stack, Link, Switch } from '@mui/material';
import Logo from '../assets/images/love-gym.png'
// import{ BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  
  return (
    <Stack       
      direction='row'
      justifyContent='space-around'
      px='20px'
      sx={{
        gap: { xs: '40px', sm: '122px'}, 
        mt: { xs: '20px', sm: '32px'},
        justifyContent: 'none'
      }}
    >
      <RouterLink to="/">
        <img src={Logo} alt='logo' style={{width: '70px', height: '70px', margin: '0 20px'}}/>
      </RouterLink>
      <Stack 
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        
        <Link href="/" underline='hover' sx={{color: 'black'}}>Home</Link>
        <Link href="#exercises" underline='hover' sx={{color: 'black'}}>Exercises</Link>
        {/* <button onClick={()=>setIsDarkMode(!isDarkMode)}  style={{color: isDarkMode? 'red' : 'blue' , backgroundColor: isDarkMode? 'black' : 'white', height: '50px', width: '50px' }}>{isDarkMode ? "dark" : "light"}</button> */}
        {/* <Stack direction='row' >
          <BsFillSunFill fontSize='20px' color={isDarkMode ? 'black' : '#ff2625'} />
          <Switch checked={isDarkMode} size='large' onChange={()=>setIsDarkMode(!isDarkMode)} color='default' />
          <BsMoonStarsFill fontSize='15px' color={isDarkMode ? '#ff2625' : 'black'}/>
        </Stack> */}        
      </Stack>
    </Stack>
  )
}

export default Navbar