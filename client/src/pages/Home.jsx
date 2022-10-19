import React , { useState } from 'react'
import Box from '@mui/material/Box';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');  
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        selectedBodyPart={selectedBodyPart} 
        setSelectedBodyPart={setSelectedBodyPart} 
        setExercises={setExercises}
        />
      <Exercises 
        selectedBodyPart={selectedBodyPart}        
        setExercises={setExercises} 
        exercises={exercises}
      />
    </Box>
  )
}

export default Home