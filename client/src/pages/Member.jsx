import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "react-elastic-carousel"
import Card from '../component/Card'
import "../style/Member.css"
import { data } from 'jquery'
import CardItem from '../component/CardItem'

function Member() {
    const contentNumber = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
    ];

    const [state, setState] = useState([])
    const [userdata, setuserData] = useState([])
    useEffect(async () => {
        await axios.get('http://localhost:9928/member/member')
            .then((res) => {
                //    console.log(res.data.db_data)
                //    memberData += res.data.db_data
                setState(res.data.db_data);
            })
    }, []);

    const photos = state.map(value => [value['m_photo']]);

    const onClickData = (e) => {
        const dataFilter = state.filter((value) => value.m_photo == e.target.name)
        setuserData(dataFilter[0])
    }
    return (
        <div>
            <div className='member_header'>
                <h1>멤버 소개</h1>
            </div>
            <div className='member'>
                <Carousel breakPoints={contentNumber}>
                    {photos.map((value) =>
                        <Card onClick={onClickData} photo={value} />)}
                </Carousel>
                <div>
                    {userdata ?
                        <CardItem
                            data={userdata}
                        /> : <>기다려</>}
                </div>
            </div>
        </div>
    )
}

export default Member
