import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";


function App() {
  const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((preData) => {
        return {...preData, [key]: data};
      })
    })
  }

  useEffect(() =>{
    generateData( "topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[]);

  const {topAlbums = [], newAlbums = [], songs = []} = data;
  return (
    <>    
      <div>
        <Navbar/> 
        <Outlet context={{ data:{topAlbums,newAlbums,songs} }}/>
     </div>
    </>

  );
}

export default App;
