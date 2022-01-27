import * as React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Nav() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <nav className='nav'>
                <div>
                    <i><img className='nav_logo' src='../image/nav_logo.png'></img></i>
                </div>
                <ul className='nav_item'>
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/about'>About</Link></li>
                    <li><Link className="link" to="/member">Member</Link></li>
                    <li><Link className="link" to="/research">Research</Link></li>
                    <li><Link className="link" to="/gallery">Gallery</Link></li>
                    <li><Link className="link" to="/notice">Notice</Link></li>
                </ul>
                <ul className='nav_login'>
                    <li>
                        <button onClick={handleOpen}>Login</button>
                        <Modal
                            className='modal_wrap'
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className='modal'>
                                <div className='modal_header'>
                                    <div className='small_logo'>
                                        <i><img  src='../image/small_logo.png'></img></i>
                                    </div>
                                    <ul className='modal_title'>
                                        <li>
                                            LoginPage
                                        </li>
                                    </ul>
                                    <ul className='modal_close'>
                                        <li>
                                            <button
                                            className='close_btn'
                                                onClick={handleClose}
                                            >x
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <Typography className='modal_content' sx={{ mt: 2 }}>
                                    <form>    
                                        <p><input className='login_input'type='text' name='username' placeholder='username' /></p>  
                                        <p><input className='login_input'type='password' name='password' placeholder='passowrd' /></p>
                                        <p><input className='login_clear' type="submit" value="Login" /></p>
                                    </form>
                                </Typography>
                            </Box>
                        </Modal>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Nav
