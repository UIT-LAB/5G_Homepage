import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
    let memberData = []
    const [state, setState] = useState([])
    useEffect(async () => {
        await axios.get('http://localhost:9928/member/member')   
            .then((res) => {
               console.log(res)
               memberData = res
                setState(res.data.result);
            })
    }, []);

    const photos = memberData.map(value => [value['m_photo']]);
    console.log(photos)
    return (
        <div  className='member'>
            <Carousel breakPoints ={contentNumber}>
                <Card photo = {photos}/>
              
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
