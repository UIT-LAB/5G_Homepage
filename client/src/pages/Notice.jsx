import React from 'react';
import '../style/Notice.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Notice() {
    const [dataFromServer, setData] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/board/notice/1')
            .then((response) => {
                setData(response.data.result);
            })
    }, []);

    const renderData = dataFromServer.map((data, index) => {
        return (
            <tr className='line'>
                <td className='category'>공지</td>
                <td className='title'>{data.n_title}</td>
                <td className='author'>{data.n_writer}</td>
                <td className='createAt'>{data.n_writer_date}</td>
            </tr>
        );
    })
    const renderButton = dataFromServer.map((data, index) => {
        return (
            <button>{index + 1}</button>
        )
    })
    return (
        <div className='notice_main'>
            <div>
                <h1 className='head'>공지사항</h1>
            </div>
            <table className='header_table'>
                <thead className='notice_header'>
                    <tr>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody className='notice_body'>
                    {renderData}
                    <br></br>
                </tbody>
            </table>
            <div className='pageBtn'>
                {renderButton}
            </div>
        </div>
    );
}

export default Notice;
