import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/NoticeDetail.css'

function NoticeDetail() {
    let params = useParams();
    const [data, setData] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/board/notice/detail', {
            params: { num: params.num }
        })
            .then((res) => {
                setData(res.data.result);
            })
    }, [params.num]);

    const title = data.map(result => result.n_title);
    const date = data.map(result => result.n_writer_date);
    const writer = data.map(result => result.n_writer);
    const content = data.map(result => result.n_content);

    return (
        <div className='notice_detail_main'>
            <div>
                <h1 className='head'>공지사항</h1>
            </div>
            <div className='body'>
                <header className='header'>
                    <h2>{title}</h2>
                    <div className='date'>
                        <span>{date}</span>
                        <span className='writer'>{writer}</span>
                    </div>
                </header>
                <section className='sec'>
                    <div className='secdiv'>
                        {content}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NoticeDetail