import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../component/Image'

import '../style/Home.css'


function Home() {
    return (
        <div>
            <header className='home_wrap'>
                <div id='top_item'>
                    <h1 className='top_text'>ITRC_Top</h1>
                    <ul className='home_menu'>
                        <li><a href='#top_item'>●</a></li>
                        <li><a href='#middle_item'>●</a></li>
                        <li><a href='#bottom_item'>●</a></li>
                    </ul>
                </div>
            </header>
            <section className='' id='middle_item'>
                <div id='top_item'>
                    <h1 className='top_text'>ITRC_Middle</h1>
                    <ul className='home_menu'>
                        <li><a href='#top_item'>●</a></li>
                        <li><a href='#middle_item'>●</a></li>
                        <li><a href='#bottom_item'>●</a></li>
                    </ul>
                </div>
            </section>
            <section className='' id='bottom_item'>
                <div id='top_item'>
                    <h1 className='top_text'>ITRC_Bottom</h1>
                    <ul className='home_menu'>
                        <li><a href='#top_item'>●</a></li>
                        <li><a href='#middle_item'>●</a></li>
                        <li><a href='#bottom_item'>●</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Home
