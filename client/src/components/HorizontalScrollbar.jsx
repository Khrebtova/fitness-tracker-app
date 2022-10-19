import React, { useContext } from 'react'
import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPartCard from './BodyPartCard';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (            
        <BsFillArrowLeftSquareFill onClick={()=> scrollPrev()} className='left-arrow'/>            
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <BsFillArrowRightSquareFill onClick={()=> scrollNext()} className="right-arrow"/>
    )
}

const HorizontalScrollbar = ({data, selectedBodyPart, setSelectedBodyPart}) => {

    return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >        
        {data.map((item) => (
            <Box key = {item.id || item} itemID = {item.id || item} title = {item.id || item} m = '0 40px'>
                <BodyPartCard item={item} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart}/>
            </Box>
        ))}        
    </ScrollMenu>
  )
}

export default HorizontalScrollbar