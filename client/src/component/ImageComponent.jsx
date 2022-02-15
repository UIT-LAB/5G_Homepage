import { Modal } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function ImageComponent({image}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    // const Imagemap = () => {
    //     {image.map((value) => 
    //         <div className='image-box'>
    //             <img className='image-box' src={`/image/gallery/${value}`} alt='' onClick={handleOpen}/>
    //         </div>
    //     )};
    // }
    // const [Modal, setModal] = useState({
    //     contents : image,
    //     index : null,
    //     hasModal : false
    // });

    //     const images = images.contents.map((value, index) => 
    //         <img className='image-box' src={`/image/gallery/${value}`} alt='' onClick={handleOpen}/>
    // )

    // const handleModal = (index) => {
    //     setModal({
    //         index : index,
    //         hasModal : !Modal.hasModal
    //     })
    // }
    // isOpen && Modal(open) Modal 통해서 들어감. img(onClick) 이미지
    
  return (
    <div>
        {image.map((value, index) => 
                    <div className='image-box'>
                        <img className='image-box' src={`/image/gallery/${value}`} alt='' onClick={handleOpen}/>
                        { isOpen && (
                            <Modal
                                className='dialog'
                                open
                                onClick={handleOpen}
                                >
                                    <img className={`image-box-${index}`} src={`/image/gallery/${value}`} alt='' onClick={handleOpen}/>
                                </Modal>
                        )}
                    </div>
        )}
    </div>
  )
}

export default ImageComponent