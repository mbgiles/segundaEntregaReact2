
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
<<<<<<< HEAD
    <header className="header"> 
    <img className='logo' src="/assets/te-de-mate.png" alt="" />
        <Link className='titulo' to="/"><h1>Quiero mi mate</h1></Link>
=======
    <header className="header">
        <img className='logo' src="src/assets/te-de-mate.png" alt="" />
        <Link to="/"><h1>Quiero mi mate</h1></Link>
>>>>>>> 87b7025c0ccf240523d506a4779233251fdc97d5
        <NavBar />
        <CartWidget/>
    </header>
  )
}
