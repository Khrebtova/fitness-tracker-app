import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'; 
import { fetchData, exerciseOptions , exerciseURL} from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('')  

  const handleSearch = async (e) => {
    if(search){
      const exerciseData = await fetchData(exerciseURL, exerciseOptions);
      console.log(exerciseData);
    }
  }

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
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          onClick={handleSearch}
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