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
                    <i><img className='nav_logo' src='../../public/Image/nav_logo.png'></img></i>
                </div>
                <ul className='nav_item'>
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/board'>About</Link></li>
                    <li><Link className="link" to="/member">Member</Link></li>
                    <li><Link className="link" to="/research">Research</Link></li>
                    <li><Link className="link" to="/gallery">Gallery</Link></li>
                </ul>
                <ul className='nav_login'>
                    <li>
                        <button type="button" onClick={handleOpen}>Login</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            arai-labelledby="modal-modal-title"
                            arai-describedby="modal-modal-description"
                        >
                            <Box>
                                <Typography id="modal-modal-title" variant='h6' component="h2">
                                    LoginPage
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <form>
                                        <input type='text' name='username' placeholder='username' />
                                        <input type='password' name='password' placeholder='passowrd' />
                                        <input type="submit" value="Login" />
                                        <button onClick={handleClose}>x</button>
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
