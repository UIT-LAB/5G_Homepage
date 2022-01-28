import React from 'react';
import '../style/Notice.css'

function Notice() {
    const test = [
        { num: 1, title: "title 1", author: "Dong", createAt: "2022-01-27" },
        { num: 2, title: "title 2", author: "Dong", createAt: "2022-01-27" },
        { num: 3, title: "title 3", author: "Dong", createAt: "2022-01-27" },
        { num: 4, title: "title 4", author: "Dong", createAt: "2022-01-27" },
        { num: 5, title: "title 5", author: "Dong", createAt: "2022-01-27" },
        { num: 6, title: "title 6", author: "Dong", createAt: "2022-01-27" },
        { num: 7, title: "title 7", author: "Dong", createAt: "2022-01-27" }
    ]
    const renderData = test.map(data => {
        return (
            <tr className='line'>
                <td className='num'>{data.num}</td>
                <td className='title'>{data.title}</td>
                <td className='author'>{data.author}</td>
                <td className='createAt'>{data.createAt}</td>
            </tr>
        );
    })
    return (
        <div className='notice_main'>
            <div>
                <h1 className='head'>공지사항</h1>
            </div>
            <table className='header_table'>
                <thead className='notice_header'>
                    <tr>
                        <th>번호</th>
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
            <div>
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    );
}

export default Notice;
