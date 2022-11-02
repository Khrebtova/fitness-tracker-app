import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, exerciseURL, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({selectedBodyPart, setExercises, exercises, search}) => { 
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexofLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexofLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexofLastExercise);
  const renderExercises = currentExercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise}/>)

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (selectedBodyPart === 'all') {
        exercisesData = await fetchData(exerciseURL, exerciseOptions);
      } else {
        exercisesData = await fetchData(exerciseURL+`/bodyPart/${selectedBodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [selectedBodyPart]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scroll({ top: 1800, behavior: 'smooth' })
  }

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
      <Stack mt='100px' alignItems='center'>
      {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
      )}

      </Stack>
    </Box>
  )
}

export default Exercises