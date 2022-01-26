import React from 'react';
import '../style/Notice.css'

function Notice() {
    return (
        <div className='notice_main'>
            <div>
                <h1 className='head'>공지사항</h1>
            </div>
            <table className='header_table'>
                <thead className='notice_header'>
                    <tr className = "tr">
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default Notice;
