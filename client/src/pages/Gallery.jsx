import Card from '@mui/material/Card';
// import Box from '@mui/material/Box'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../style/Gallery.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import TestCard from '../component/TestCard';

    // const bull = (
    //     <Box
    //         component="span"
    //         sx = {{ display : 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    //     >
    //         •
    //     </Box>
    // );

function Gallery() {

    const [state, setState] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/gallery')
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
        <div className='container'>
            <div className='item'>
                <h1 className='Research_Header'>Gallery</h1>
            </div>
            {state.map((value, index) => 
                <div className='Research_Content'>
                    <a href='#'>
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx = {{ fontSize : 14}} color="text.secondary" gutterBottom >
                                UIT-LAB Card{value['g_title']}
                            </Typography>
                            <Typography variant='h5' component="div" >
                                UIT LAB WITH Us
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    <TestCard photo={images[index]}/>
                            </Typography>
                            <Typography variant="body2">
                                {value['g_write_date']}
                            </Typography>
                        </CardContent>
                        </Card>
                    </a>
                </div>
                )}
        </div>
    )
}

export default Gallery
