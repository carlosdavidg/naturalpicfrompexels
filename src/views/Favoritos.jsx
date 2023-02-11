import Galeria from '../components/Galeria'

const Favoritos = () => {
  return (
    <div className='bodyfav'>
        <div className='title'>
          <h2>Favoritos</h2>
        </div>
          <Galeria fav={true}></Galeria>
    </div>
  )
}

export default Favoritos