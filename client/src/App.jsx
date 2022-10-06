import React from 'react'
import './App.css'
import { Router, Route, Routes} from 'react-router-dom'
import {Box, NavBar} from '@mui/material';

const App = () => {
  return (
    <Box width='400px'> 
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
    </Box>
  )
}

export default App