import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import cart_icon from '../Assests/cart_icon.png' 
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/nav_dropdown.jpg';
 
const Navbar = () => {


    const [menu, setmenu ] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    //navbar to button
    const menuRef =useRef();
    // const dropdown_toggle = (e) =>{
    //   menuRef.current.classList.toggle('nav-menu-visible');
    //   e.target.classList.toggle('open');
    // }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <p>Amolie</p>
            <span className='small-text'>SHOPPING</span>
        </div>
        {/* navbar to button */}
        {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
        
      <ul ref={menuRef} className="nav-menu d-flex">
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'><p>Shop</p></Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none',}}  to='/mens'><p>Mens</p></Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}}  to='/womens'><p>Womens</p></Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}}  to='/kids'><p>Kids</p></Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart d-flex pe-5">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img className='cart-icon' src={cart_icon} alt="" /></Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar
