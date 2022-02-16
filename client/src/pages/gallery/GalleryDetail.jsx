import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/Detail.css';
import ImageComponent from '../../component/ImageComponent';

function GalleryDetail(){
    let params = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState([]);
    // const [galleryData, setGalleryData] = useState([]);

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
    const DeleteAction = async () => {
            await axios.post('http://localhost:9928/gallery/delete', {
                gidx : gid[0],
            })
                .then((res) => {
                    alert('성공');
                    navigate(-1);
                });
        };
    

    const onRemove = () => {
        if(window.confirm('삭제하시겠습니까?')){
            DeleteAction();
        } else{
            alert('실패');
        }
    }

    return (
        <div className="gallery-main">
            <div className='detail-title'>
                <h1>Gallery</h1>
            </div>
            <table className='detail-table'>
                <tr>
                    <td>제목</td>    
                    <td>{title}</td>
                </tr>
                <tr>
                    <td>작성 번호</td>
                    <td>{gid}</td>
                </tr>
                <tr>
                    <td>작성 날짜</td>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td><ImageComponent image={image}/></td>
                </tr>
            </table>
            <Link to={`/gallery/update/${gid}`}><button>수정</button></Link>
            <button onClick={onRemove}>삭제</button>
            </div>
    )
}

export default GalleryDetail