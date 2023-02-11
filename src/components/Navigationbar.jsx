import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import MyContext from '../context/MyContext'


const Navigationbar = () => {

  const {setSearch} = useContext(MyContext);
  const [filterState, setFilterState] = useState('');



  const Onchange = (event) => {

    setFilterState(event.target.value)


  }

  const filter = () => {

    setSearch(filterState)

  }


  return (
    <div>

        <div className='nav'>
            <div><Link to="/" className='link'>Home</Link></div>
            <div className='inputcontainer'>
              <input type='text' onChange={Onchange} placeholder='   search anything'/>
              <button onClick={filter}>Buscar</button>
            </div>
            <div><Link to="/Favoritos" className='link'>Favoritos</Link></div>
            
        </div>



    </div>
  )
}

export default Navigationbar