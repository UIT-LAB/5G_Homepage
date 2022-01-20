import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'


function Nav() {
   
    return (
        <div>
           <nav className='nav'>
               <div>
                    <i><img className='nav_logo'src='../image/nav_logo.png'></img></i>
               </div>
               <ul className='nav_item'>
                   <li><Link className="link"to='/board'>About</Link></li>
                   <li><Link className="link"to='/'>Home</Link></li>
                   <li>Member</li>
                   <li>Research</li>
                   <li>Gallery</li>
               </ul>
               <ul className='nav_login'>
                   <li>Login</li>
               </ul>
           </nav>
        
        </div>
    )
}

export default Nav
