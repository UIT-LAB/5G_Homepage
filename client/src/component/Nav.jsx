import * as React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import storage from 'lib/storage'

const cookies = new Cookies();

axios.defaults.withCredentials = true;

function Nav() {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [state, setState] = useState('Login');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(async () => {
        if (cookies.get('user') || cookies.get('refreshToken'))
            setState(localStorage.getItem('user'));
    }, [])

    const loginButton = () => {
        let btn = [];
        if(cookies.get('user') || cookies.get('refreshToken')) {
            console.log('asd' + cookies.get('user') || cookies.get('refreshToken'));
            btn.push(<p>{state}</p>)
        } else {
            console.log('dsa' + console.log(cookies.get('user') || cookies.get('refreshToken')));
            btn.push(<button onClick={handleOpen}>{state}</button>)
        }
        return btn;
    }

    const postData = async () => {
        axios.post('http://localhost:9928/login', {
            inputid: id,
            inputpw: pw
        })
            .then((response) => {
                if (response.data.state == 'login' && (cookies.get('user') || cookies.get('refreshToken'))) {
                    localStorage.setItem('user', JSON.stringify(response.data.name));
                    setState(localStorage.getItem('user'));
                    handleClose();
                }
                else {
                    alert('아이디 혹은 비밀번호 오류입니다.');
                }
            })
    }

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        postData();
    }

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
                        {loginButton()}
                        {/* <button>asd</button> */}
                        <Modal
                            className='modal_wrap'
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className='modal'>
                                <div className='modal_header'>
                                    <div className='small_logo'>
                                        <i><img src='../image/small_logo.png'></img></i>
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
                                    <form onSubmit={onSubmitHandler}>
                                        <p><input className='login_input' type='text' name='username' placeholder='username' onChange={onIdHandler} /></p>
                                        <p><input className='login_input' type='password' name='password' placeholder='passowrd' onChange={onPwHandler} /></p>
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
