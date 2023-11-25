import React from "react";
import { Link } from "react-router-dom";
import './about.css'

export default function About() {
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
                <p>
                    Aplikasi ini dibuat untuk Tugas Akhir saya dalam Praktikum Pemrograman Perangkat Begerak
                    tahun 2023. Aplikasi ini bertujuan untuk memberikan rekomendasi lagu serta album yang dapat dicari
                    oleh pengguna.
                </p>
            </div>
      </div>
    );
}