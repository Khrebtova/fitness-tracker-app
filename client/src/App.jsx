import React, { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Box width='400px' sx={{width: { xl:'1488px' }}} m='auto'> 
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App