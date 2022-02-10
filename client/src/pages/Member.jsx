import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "react-elastic-carousel"
import Card from '../component/Card'
import "../style/Member.css"

function Member() {
    const contentNumber = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
    ];
    
    const [state, setState] = useState([])
    useEffect(async () => {
        await axios.get('http://localhost:9928/member/member')
            .then((res) => {
                //    console.log(res.data.db_data)
                //    memberData += res.data.db_data
                setState(res.data.db_data);
            })
    }, []);

    const photos = state.map(value => [value['m_photo']]);
    const rows = state.map((data, index) => {
        return (
           <ul>
               <li>{data.m_division}</li>
               <li>{data.m_partdivision}</li>
               <li>{data.m_gender}</li>
               <li>{data.m_univ}</li>
               <li>{data.m_group}</li>
               <li>{data.name}</li>
           </ul>
        );
    })
    return (
        <div>
            <div className='member_header'>
            <h1>멤버 소개</h1>
            </div>
        <div className='member'>
            <Carousel breakPoints={contentNumber}>
                {photos.map((value)=>
                <Card photo={value}/>)}
            </Carousel>
            <div className='member_item'>
                <div className='member_img'>
             
                </div>
                <div className='member_detail'>
                    {rows}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Member
