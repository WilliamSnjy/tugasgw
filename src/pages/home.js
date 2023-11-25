import React from 'react';
import axios from 'axios';
import './search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const getMusic = async () => {
  const music = await axios.get('https://genius-song-lyrics1.p.rapidapi.com/chart/songs/',{
    params: {
      per_page: '12',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'ac13822fa3msh415ba39fc3a6ad5p121610jsn8503e2d7562c',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  }
  );
  return music.data.chart_items
}
const Search = () => {

  const [trackMusic, setTrackMusic] = useState([])
  
  useEffect(() => {
    getMusic().then((result) => {
      setTrackMusic(result)
    })
  }, [])

  const MusicList = () => {
    return trackMusic.map((music, i) => {
      return (
        <Card key={i}>
            <Card.Img src={music.item.song_art_image_url}/>
            <Card.Title>{music.item.title}</Card.Title>
        </Card>
      )
    })
  }

  return (
    <div className="App">
        <div className='App-navbar'>
            <h1 className='nav-title'>Music Mania</h1>
            <Link to='/home' className='nav-button'>Home</Link>
            <Link to='/search' className='nav-button'>Search</Link>
            <Link to='/about' className='nav-button'>About</Link>
            <Link to='/profile' className='nav-button'>Profile</Link>
        </div>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          <MusicList/>
        </Row>
      </Container>
    </div>
  );
}

export default Search;