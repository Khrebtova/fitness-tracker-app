import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Typography, Stack } from '@mui/material';
// to={`/exercise/${exercise.id}`}

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ 
        ml: '21px', 
        color: '#fff', 
        background: '#732b2b', 
        fontSize: '14px', 
        borderRadius: '20px', 
        textTransform: 'capitalize' 
      }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ 
        ml: '21px', 
        color: '#fff', 
        background: '#c63f01', 
        fontSize: '14px', 
        borderRadius: '20px', 
        textTransform: 'capitalize' 
      }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography 
      color="#000" 
      fontWeight="bold" 
      fontSize='22px' 
      sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
      ml="21px" 
      mt="11px" 
      pb="10px" 
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
  )
}

export default ExerciseCard