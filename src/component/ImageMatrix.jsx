import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';

function ImageMatrix(props) {
    return (
        <ImageListItem key={props.id}>
            <img
                src={`${props.img}`}
                alt='Image'
                srcSet={`${props.img}`}
                loading="lazy"
            />
        </ImageListItem>
    )
}

export default ImageMatrix