import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import cart_icon from '../Assests/cart_icon.png' 
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbars = () => {
    const [menu, setmenu ] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className="container">
        <div className="nav-logo">
            <p>Amolie</p>
            <span className='small-text'>SHOPPING</span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span class="navbar-toggler-icon">Amolie</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-item">
                <li className='nav-item' onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'><p>Shop</p></Link> {menu==="shop"?<hr/>:<></>}</li>
                <li className='nav-item' onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none',}}  to='/mens'><p>Mens</p></Link> {menu==="mens"?<hr/>:<></>}</li>
                <li className='nav-item' onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}}  to='/womens'><p>Womens</p></Link> {menu==="womens"?<hr/>:<></>}</li>
                <li className='nav-item' onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}}  to='/kids'><p>Kids</p></Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="nav-item nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
        
            <Link to='/cart'><img className='cart-icon' src={cart_icon} alt="" /></Link>
        
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbars
