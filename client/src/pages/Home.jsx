import React from 'react'
import Image from '../component/Image'
import Notice from './Notice'
import '../style/Home.css'
import * as GiIcons from "react-icons/gi"
import * as HiIcons from "react-icons/hi"

function Home() {
    return (
        <div>
            <div className='wrap'>
                <div className='header'>
                    <Image />
                </div>
                <div className='home_middle'>
                    <div className='small_notice'>
                        <Notice/>
                    </div>
                    <div className='icon_box'>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                        <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>갤러리
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
