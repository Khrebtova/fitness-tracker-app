import React from 'react'
import { Box } from '@mui/material';
import BodyPartCard from './BodyPartCard';

const HorizontalScrollbar = ({data, selectedBodyPart, setSelectedBodyPart}) => {
  
    return (
    <Box display='flex' flexDirection='row'>
        {data.map((item) => (
            <Box 
            key={item.id || item} 
            itemID={item.id || item} 
            title={item.id || item}
            m = '0 40px'
            >
                <BodyPartCard item={item} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart}/>
            </Box>
        ))}
    </Box>
  )
}

export default HorizontalScrollbar