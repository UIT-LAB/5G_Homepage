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
                    <i><img className='nav_logo'src='../image/nav_logo.png'></img></i>
               </div>
               <ul className='nav_item'>
                   <li><Link className="link"to='/board'>About</Link></li>
                   <li><Link className="link"to='/'>Home</Link></li>
                   <li>Member</li>
                   <li>Research</li>
                   <li>Gallery</li>
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
                                    <ul>
                                        <li>
                                            LoginPage
                                        </li>
                                    </ul>
                                    <ul className='modal_close'>
                                        <li>
                                            <button
                                                onClick={handleClose}
                                            >x
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <Typography className='modal_content' sx={{ mt: 2 }}>
                                    <form>
                                        <p><input type='text' name='username' placeholder='username' /></p>
                                        <p><input type='password' name='password' placeholder='passowrd' /></p>
                                        <input className='login_clear' type="submit" value="Login" />
                                    </form>
                                </Typography>
                            </Box>
                        </Modal>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
