import MyContext from './context/MyContext';
import Navigationbar from './components/Navigationbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favoritos from './views/Favoritos'
import Home from './views/Home'
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
const client = createClient('BDymbn1Azif0soADdWY7BDpBPvMpW2mdaFHsaEjoTgo4P3hTOeddRZZS');





function App() {

  const [picturesApi, setPicturesApi] = useState([]);
  const [search, setSearch] = useState('nature')
  const global = {picturesApi, setPicturesApi, search, setSearch}


  const options = {
    method: 'GET',
    headers: {
      Authorization: 'BDymbn1Azif0soADdWY7BDpBPvMpW2mdaFHsaEjoTgo4P3hTOeddRZZS',
      
    }
  }

  async function getPictures() {
    
    const res = await fetch(`https://api.pexels.com/v1/search?query=${search}`, options)
    const data = await res.json()

    setPicturesApi(data.photos)
  
  }

  useEffect(()=> {

    getPictures()

  },[search])


  return (
    
    <div className="App">

      <MyContext.Provider value={global}>

      <BrowserRouter>

      <Navigationbar/>


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Favoritos' element={<Favoritos/>}/>

      
      </Routes>
      
      </BrowserRouter>

      <Footer/>

      </MyContext.Provider>

    </div>
  );
}

export default App;
