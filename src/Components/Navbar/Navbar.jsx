import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Elixir logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { TiThMenu } from 'react-icons/ti';
import { ImCart } from "react-icons/im";

const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext)
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='navbar'>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            {/* <span></span>
            <span></span>
            <span></span> */}
            <TiThMenu className='menu-icon'/>
        </div>

        <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
            {/* <p>Elixir</p> */}
        </div>

        <ul className={menuOpen ? "nav-menu open" : "nav-menu" }>
            <li onClick={() => {setMenu('shop'); setMenuOpen(false)}}><Link style={{textDecoration: 'none'}} to='/' >Home</Link></li>
            <li onClick={() => {setMenu('mens'); setMenuOpen(false)}}><Link style={{textDecoration: 'none'}} to='/mens' >Products</Link></li>
            <li onClick={() => {setMenu('about'); setMenuOpen(false)}}><Link style={{textDecoration: 'none'}} to='/about' >About</Link></li>
            {/* <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none'}} to='/womens' >Women</Link></li>
            <li onClick={() => {setMenu('kids')}}><Link style={{textDecoration: 'none'}} to='/kids' >Kids</Link>{menu==='kids' ? <hr/> : <></>}</li> */}
        </ul>

        <div className="nav-login-cart">
            {/* <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link> */}
            <Link to='/cart'><ImCart className='cart-icon'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar