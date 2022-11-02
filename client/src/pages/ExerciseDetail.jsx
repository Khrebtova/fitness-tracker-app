import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'; 
import { fetchData, exerciseOptions , exerciseURL, youtubeSearchUrl, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercise = async () => {
      const exerciseDetailData  = await fetchData(exerciseURL+`exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData );

      const exerciseVideosData = await fetchData(youtubeSearchUrl+`/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)
    }
    fetchExercise();
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />

    </Box>
  )
}

export default ExerciseDetail