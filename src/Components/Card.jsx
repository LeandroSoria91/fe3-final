import { useContext, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom'
import { BsHeart, BsHeartFill, BsStar, BsStarFill } from 'react-icons/bs'

const Card = ({ name, username, id }) => {
  const { favState, favDispatch } = useContext(ContextGlobal)
  const [imageLoaded, setImageLoaded] = useState(false)

  const isFav = favState.some(fav => fav.id === id)

  const onFavClick = e => {
    e.stopPropagation()
    if (isFav) {
      favDispatch({ type: 'DELETE_FAV', payload: id })
    } else {
      favDispatch({ type: 'ADD_FAV', payload: { name, username, id } })
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className='card-wraper'>
      <Link className='card' to={`/detail/${id}`}>
        {!imageLoaded && <div className='skeleton_img'></div>}
        <img
          src='./images/doctor.jpg'
          alt='doctor'
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <p>{name}</p>
        <p>User: {username}</p>
        <p>Id: {id}</p>
      </Link>
      <button
        onClick={onFavClick}
        className={`favButton ${isFav ? 'favorited' : ''}`}
      >
        {isFav ? <BsStarFill /> : <BsStar />}
      </button>
    </div>
  )
}

export default Card
