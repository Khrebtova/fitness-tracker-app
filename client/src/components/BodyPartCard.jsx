import React from 'react';
import { Stack, Typography } from '@mui/material';
import {RiBodyScanFill} from 'react-icons/ri';

const BodyPartCard = ({item, selectedBodyPart, setSelectedBodyPart}) => {
  
  return (
    <Stack 
      type='button' 
      alignItems='center' 
      justifyContent='center' 
      className='bodyPart-card'
      sx = {{ 
        backgroundColor: '#fff', 
        borderBottomLeftRadius: '20px', 
        width: '150px', 
        height: '150px', 
        cursor: 'pointer', 
        gap: '40px', 
        borderTop: selectedBodyPart === item ? '5px solid #ff2625' : 'none' ,
        }}  
      onClick={() => {setSelectedBodyPart(item); window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })}}
    >
      <RiBodyScanFill color="#FF2625" fontSize='40px'/>
      <Typography >{item}</Typography>
    </Stack>
  )
}

export default BodyPartCard