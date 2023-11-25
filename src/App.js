import React, { useEffect, useState} from 'react';
import Search from './pages/search';
import Home from './pages/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Profile from './pages/profile';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App () {

  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  return (
    <div className='loading'>
      {
        loading ?

        <ClimbingBoxLoader size={50} color={'#F37A24'} loading={loading}
        />
        :

      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
