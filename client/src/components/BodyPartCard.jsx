import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import {RiBodyScanFill} from 'react-icons/ri';

const BodyPartCard = ({item, selectedBodyPart, setSelectedBodyPart}) => {
  return (
    <Stack 
      type='button' 
      alignItems='center' 
      justifyContent='center' 
      className='bodyPart-card'
      sx={
        selectedBodyPart === item ? { borderTop: '4px solid #ff2625', backgroundColor: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '40px'} : ''
      }
      onClick={() => setSelectedBodyPart(item)}
    >
      {/* <img src={Icon} alt='icon' width='40px' height='40px'/> */}
      <RiBodyScanFill color='#FF2625' fontSize='40px'/>
      <Typography >{item}</Typography>
    </Stack>
  )
}

export default BodyPartCard