import React from 'react'
import Image from '../component/Image'
import '../style/Home.css'
import * as GiIcons from "react-icons/gi"
import * as HiIcons from "react-icons/hi"
import * as BsIcons from "react-icons/bs"

function Home() {
    return (
        <div>
            <div className='wrap'>
                <div className='header'>
                    <Image />
                </div>
                <div className='home_middle'>
                    <div className='small_notice'>

                    </div>
                    <div className='icon_box'>
                         <p className='icon_item'>
                            <BsIcons.BsMenuApp className='i'/><br/>소개
                        </p>
                        <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>멤버
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>연구
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>사진
                        </p>
                         <p className='icon_item'>
                            <HiIcons.HiOutlinePhotograph className='i'/><br/>공지사항
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
