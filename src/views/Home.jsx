import Galeria from '../components/Galeria'

const Home = () => {

  return (
    <div>
        <div className='title'>
          <h2>Home</h2>
          </div>
        <Galeria fav={false}></Galeria>
    </div>
  )

  }

export default Home