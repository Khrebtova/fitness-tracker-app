import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'; 
const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography  sx={{ fontSize: {lg: '44px', sm:'36px', xs: '30px'}, fontWeight: '700', mb: '50px', textAlign: 'center'}}>
        Awesome Exercises For You <br/> To Try Out
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {xs: '300px', sm: '300px', lg: '800px'},
            backgroundColor: 'white',
            borderRadius: '40px',
          }}
          height='76px'
          value=''
          onChange={(e) => {console.log(e.target.value)}}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',  
            color: '#fff', 
            textTransform: 'none', 
            width: {xs: '80px', sm: '100px', lg: '175px'}, 
            fontSize: {xs: '14px', sm: '16px', lg: '20px'},             
            height: '56px',   
            position: 'absolute',
            right: '0',         
        }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises