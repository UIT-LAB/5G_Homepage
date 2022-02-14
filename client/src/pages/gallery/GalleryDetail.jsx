import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/Detail.css';

function GalleryDetail(){
    let params = useParams();
    const navigate = useNavigate();
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

    // trigger를 이용하여 처리
    // const DeleteAction = useEffect( async () => {
    //         await axios.post('http:/localhost:9928/gallery/delete', {
    //             gidx : gid[0],
    //         })
    //             .then((res) => {
    //                 navigate(-1);
    //             });
    //     });

    const onRemove = () => {
        if(window.confirm('삭제하시겠습니까?')){
            alert('성공');
            navigate(-1);
        } else{
            alert('실패');
        }
    }

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
                        <img className='image-box' src={`/image/gallery/${value}`} alt=''/>
                    </div>
                )};    
            <Link to={`/gallery/update/${gid}`}><button>수정</button></Link>
            <button onClick={onRemove}>삭제</button>
            </div>
        </div>
    )
}

export default GalleryDetail