
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className="header"> 
    <img className='logo' src="/assets/te-de-mate.png" alt="" />
        <Link className='titulo' to="/"><h1>Quiero mi mate</h1></Link>
        <NavBar />
        <CartWidget/>
    </header>
  )
}
