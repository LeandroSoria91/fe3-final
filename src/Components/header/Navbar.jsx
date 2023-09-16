import { NavLink } from 'react-router-dom'
import ToggleButton from './ToggleButton.jsx'



const Navbar = () => {


  return (
    <nav>
      <ul>
        <li className='desktop-nav'> <NavLink to='/' end> Inicio</NavLink> </li>
        <li className='desktop-nav' > <NavLink to='/contact'>Contacto</NavLink> </li>
        <li className='desktop-nav' > <NavLink to='/favs'>Favoritos</NavLink> </li>
        <ToggleButton />
      </ul>
    </nav>
  )
}

export default Navbar