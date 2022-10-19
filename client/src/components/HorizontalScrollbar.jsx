import React, { useContext } from 'react'
import BodyPartCard from './BodyPartCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const HorizontalScrollbar = ({data, selectedBodyPart, setSelectedBodyPart}) => {

    const renderCards = data.map((item) => (
        <SwiperSlide key = {item.id || item} itemID = {item.id || item} title = {item.id || item} m = '0 40px'>
            <BodyPartCard item={item} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart}/>
        </SwiperSlide>
    ))

    return (                   
        <Swiper className='bodyPart-swiper' 
            style={{ 
                '--swiper-navigation-color': '#ff2625', 
                '--swiper-navigation-size': '30px'     
            }}
            modules={[Navigation]}                
            navigation            
            breakpoints= {{
                // when window width is >= 320px
                320: {slidesPerView: 2},
                // when window width is >= 480px
                480: {  slidesPerView: 4},
                // when window width is >= 640px
                1200: { slidesPerView: 6 }
              }}               
        >
            {renderCards}
        </Swiper>                   
        
  )
}

export default HorizontalScrollbar