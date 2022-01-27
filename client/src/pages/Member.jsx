import React from 'react'
import Carousel from "react-elastic-carousel"
import Card from '../component/Card'
import "../style/Member.css"

function Member() {
    const contentNumber = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 4},
        {width: 1200, itemsToShow: 6},
    ];
    return (
        <div  className='member'>
            <Carousel breakPoints ={contentNumber}>
                <Card number= "1"/>
                <Card number= "2"/>
                <Card number= "3"/>
                <Card number= "4"/>
                <Card number= "5"/>
                <Card number= "6"/>
                <Card number= "7"/>
                <Card number= "8"/>
            </Carousel>
            <div className='member_item'>
            <div className='member_img'>

            </div>
            <div className='member_detail'>

            </div>
            </div>
        </div>
    )
}

export default Member
