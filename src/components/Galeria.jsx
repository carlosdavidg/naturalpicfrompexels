import { useContext } from 'react'
import MyContext from '../context/MyContext'
 import { FaRegHeart } from 'react-icons/fa';

const Galeria = ({fav = false}) => {

    const { picturesApi, setPicturesApi } = useContext(MyContext);


     const setFav = (id) => {

      const photoIndex =  picturesApi.findIndex((f)=> f.id === id)
      picturesApi[photoIndex].liked = !picturesApi[photoIndex].liked;
      setPicturesApi([...picturesApi]);
      
     };
    
     return (

        <div className='cardcontainer'>
            {picturesApi.filter((f) => {
                if (fav){
                    return f.liked?f:null;
                }
                else {
                    return f; 
                }
            }).map((objeto) => {
                return (
                    <div className='card' key={objeto.id}>
                        <img src={objeto.src.original}
                            alt="imagen" className='img'>
                        </img>
                        <p>{objeto.alt}</p>
                        {!fav && <FaRegHeart icon="FaRegHeart" onClick={()=> setFav(objeto.id)} style={{color:objeto.liked?"red":"black",
                         cursor: "pointer", width: "100%"}}/>}

                    </div>)

            })}
        </div>
    )
}





export default Galeria