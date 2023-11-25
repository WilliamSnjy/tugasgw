import React from "react";
import './profile.css'
import { Link } from "react-router-dom";
import hi from'./_MG_4701.jpg'

export default function Profile() {
    return(
        <div className="App">
            <div className='App-navbar'>
                <h1 className='nav-title'>Music Mania</h1>
                <Link to='/home' className='nav-button'>Home</Link>
                <Link to='/search' className='nav-button'>Search</Link>
                <Link to='/about' className='nav-button'>About</Link>
                <Link to='/profile' className='nav-button'>Profile</Link>
            </div>
            <div className="content">
              <h1>Halo Semua!!!</h1>
              <img src={hi} className="content-image" />
              <p>Perkenalkan nama saya William Sanjaya dari Universitas Diponegoro Fakultas Teknik
                jurusan Teknik Komputer angkatan 2021. Saya Lahir di Tangerang, 17 April 2003. Saya memiliki
                hobi yaitu berolahraga serta bermain game. Aplikasi ini adalah salah satu portofolio saya sebagai
                Software Developer.
              </p>
            </div>
      </div>
    );
}