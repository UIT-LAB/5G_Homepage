import Card from '@mui/material/Card';
import React from 'react'
import CardContent from '@mui/material/CardContent';
import '../../style/Gallery.css';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Gallery() {

    const [state, setState] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/')
            .then((res) => {
                // console.log(res.data.db_data);
                setState(res.data.db_data);
            })
    }, []);

    let images = [];
    const image = state.map(value => [value['g_img']]);
    for (let i=0; i<image.length; i++){
        images.push(image[i].toString().split(',')[0]);
    }

    return (
    <div>
        <div className='gallery-container'>
            <div className='gallery-item'>
                <h1 className='gallery-Research_Header'>Gallery</h1>
            </div>
            {state.map((value, index) => 
                <Link className='link' to={`/gallery/detail/${value['gid']}`}>
                    <div className='gallery-Research-Content' style={{ backgroundImage: `url("/image/gallery/${images[index]}")`}}>
                            <div className='gallery-contents'>
                                <h1>{value['g_title']}</h1>
                                <div className='gallery-date'>
                                    {value['g_write_date']}
                                </div>
                                <div className="gallery-tags">
                                    <div className='gallery-tag'>Gallery</div>
                                </div>
                            </div>

                    </div>
                </Link>
            )}
        </div>
        <Link to="/gallery/write"><button>작성</button></Link>
    </div>
    )
}

export default Gallery
