import { Modal } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import '../style/modal.css';

function ImageComponent({image}) {

    console.log(image);
    const [src, setSrc] = useState('');

    const handleOpen = (e) => {
        if(e.target.name){
            const imgsrc = "/Image/gallery/" + e.target.name;
            setSrc(imgsrc);
        } else {
            setSrc('');
        }
        
    }
    console.log('src', src);

  return (
    <div className='image-container'>
        {image.map((value) => 
            <div className='imagecomponent'>
                <img className='image-box' src={`/image/gallery/${value}`} alt='' onClick={handleOpen} name={value}/>
            </div>
        )}
        {src? 
            <Modal 
                className='gallery-modal'
                open
                onClick={handleOpen}
            >
                <img className='Modal-image' src={src} alt='' onClick={handleOpen}/>
            </Modal> : <></>
        }
    </div>
  )
}

export default ImageComponent