import { Link } from 'react-router-dom'

//styles
import './Navbar.css'



export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link  to='/' className='brand'>
                <h1>Vandalay Industries</h1>
            </Link>
            <Link  to='/about'>
                <h1>About Us</h1>
            </Link>
            <Link  to='/contact'>
                <h1>Contact Us</h1>
            </Link>
            <Link  to='/projects'>
                <h1>Our Projects</h1>
            </Link>
            <Link  to='/login'>
                <h1>Admin</h1>
            </Link>
           
        </nav>
    </div>
  )
}

 