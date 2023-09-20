import { useState, useEffect } from 'react'
import { getGifs } from '../Helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs( category )
        setImages(images);
    }

    useEffect(() => {
        getImages();
    }, [])

  return{
    images: images,
    isLoading: false

  }
}