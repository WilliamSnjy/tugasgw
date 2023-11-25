import React from 'react';
import './search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const CLIENT_ID = "2339cf2fe624432bbc4c5a410f3dd30f";
const CLIENT_SECRET = "67b21490d7c442d39a4f8e0c6ae7a7f9";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body : 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  async function search() {
    console.log("Search for " + searchInput); //Search Engine

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data =>{ return data.artists.items[0].id})

    console.log("Artist ID is " + artistID);
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.items);
      });

  }
  console.log(albums);

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
        <InputGroup className='mb-3' size='lg'>
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyPress={event => {
              if (event.key == "Enter" ){
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          {albums.map( (album,i) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url}/>
                <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Search;