import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../style/Gallery.css'

    const bull = (
        <Box
            component="span"
            sx = {{ display : 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
        >
            •
        </Box>
    );

function Gallery() {
    return (
        <div className='container'>
            <div className='item'>
                <h1 className='Research_Header'>Gallery</h1>
            </div>
            <div className='Research_Content'>
                <a href="#">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx = {{ fontSize : 14}} color="text.secondary" gutterBottom>
                                UIT-LAB Card
                            </Typography>
                            <Typography variant='h5' component="div">
                                UIT{bull}LAB{bull}WITH{bull}Us
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </div>
            <div className='Research_Content'>
                <a href="#">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx = {{ fontSize : 14}} color="text.secondary" gutterBottom>
                                UIT-LAB Card
                            </Typography>
                            <Typography variant='h5' component="div">
                                UIT{bull}LAB{bull}WITH{bull}Us
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </div>
            <div className='Research_Content'>
                <a href="#">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx = {{ fontSize : 14}} color="text.secondary" gutterBottom>
                                UIT-LAB Card
                            </Typography>
                            <Typography variant='h5' component="div">
                                UIT{bull}LAB{bull}WITH{bull}Us
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
            </div>
        </div>
    )
}

export default Gallery
