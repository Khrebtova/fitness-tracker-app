import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, exerciseURL, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({selectedBodyPart, setExercises, exercises, search}) => { 
  
  const renderExercises = exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise}/>)

  return (
    <Box id='exercises'
      sx={{mt: {lg: '110px'}}}
      mt = '50px'
      p = '20px'
    >
      <Typography sx={{ fontSize: {lg: '44px', sm:'36px', xs: '30px'}, fontWeight: '500', mb: '40px'}}> 
        Showing results for "{selectedBodyPart}": 
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: {lg: '110px', xs: '50px'}}}> 
        {renderExercises}
      </Stack> 
    </Box>
  )
}

export default Exercises