import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div className='container'>
        <div>
          <NavLink to='/' end>
            <a href='https://www.digitalhouse.com/ar/landing/ar'><img className='img' src='/DH.ico' alt='logo'/></a>
          </NavLink>
        </div>
        <Navbar/>
      </div>
    </header>
  )
}