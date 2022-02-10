import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/Detail.css';

function GalleryDetail(){
    let params = useParams();
    const [state, setState] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/detail', {
            params: { num : params.num }
        })
            .then((res) => {
                setState(res.data.db_data);
            })
    }, [params.num]);

    const image = state.map((value) => value['g_img'].toString().split(',')).flat([1]);

    const title = state.map(value => value['g_title']);
    const gid = state.map(value => value['gid']);
    const date = state.map(value => value['g_write_date']);

    console.log(image.map((value) => value));

    return (
    <div>
        <div className='container'>
            <div className='item'>
                <h2 className='Research_Header'>{title}</h2>
                    <p>작성 번호 : {gid}</p>
                    <p>작성 날짜 : {date}</p>
            </div>
            {image.map((value) => 
                <div className='image-box'>
                    <img src={`/image/gallery/${value}`} alt=''/>
                </div>
            )};    
        </div>
        <Link to={`/gallery/update/${gid}`}><button>수정</button></Link>
        {/* <form action="/gallery/delete"method="POST" name="form" class="d-inline">
            <button type="submit">삭제</button>
            <input type="hidden" name="gidx" value={gid}/>                          
        </form> */}
    </div>
    )
}

export default GalleryDetail