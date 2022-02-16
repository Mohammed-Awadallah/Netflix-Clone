
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import FavList from "./Components/FavList";
import Navigation from "./Components/Navbar";
import { useEffect , useState } from 'react';


function App() {
  const [favListData , setFavListData] = useState();

  async function getMovieFromDb() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`)
    const data = await response.json();
    setFavListData(data);
  }

  useEffect(()=>{
    getMovieFromDb();

  } , [])


  return (
    <>
     <Navigation />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList favListData={favListData} getMovieFromDb={getMovieFromDb} />} />
      </Routes>
    </>
   
  )
}

export default App;
