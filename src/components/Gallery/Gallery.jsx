import './Gallery.css'

import { useState } from 'react'

import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'

import arrow from '../../assets/arrow-left.svg'
import dots from '../../assets/dots.svg'
import waves from '../../assets/waves.svg'

const Gallery = ({isMobile}) => {

    const [selectedOption, setSelectedOption] = useState('all')
    const [selectedImage,setSelectedImage] = useState(0)

    const options = [
        {id:0, name:'all'},
        {id:1, name:'love'},
        {id:2, name:'stylish'},
        {id:3, name:'3D bold'},
    ]

    const gallery_images = [
        {id:0,image:gallery_1, name:'Style Sign'},
        {id:1,image:gallery_2, name:'Mock up Metal Sign'},
        {id:2,image:gallery_3, name:'Love Sign'},
        {id:3,image:gallery_4, name:'Love Sign'},
    ]

    const handlePrev = () => {
        if(selectedImage === 0){
            setSelectedImage(gallery_images.length-1)
        }else{
            setSelectedImage(selectedImage-1)
        }
    }

    const handleNext = () => {
        if(selectedImage === gallery_images.length-1){
            setSelectedImage(0)
        }else{
            setSelectedImage(selectedImage+1)
        }
    }

  return (
    <div className='gallery-div'>
        <div className='dots-place'>
            <img src={dots} className='dots' />
        </div>
        <div className='gallery-waves-container'>
            <div className='gallery-waves-place'>
                <img src={waves} className='gallery-waves' />
            </div>
            <div className='gallery-waves-place'>
                <img src={waves} className='gallery-waves' />
            </div>
        </div>
        <div className='gallery-container'>
            <div className='gallery-headings-container'>
                <p className='gallery-heading'>gallery</p>
                <div className='gallery-options-container'>
                {options.map((option) => (
                    <div 
                    className={`gallery-option ${selectedOption===option.name ? 'selected' : ''}`} 
                    key={option.id}
                    onClick={() => setSelectedOption(option.name)}
                    >
                        {option.name}
                    </div>
                ))}
                </div>
            </div>
            <div className='main-gallery-container'>
                <div className='gallery-images-super-container'>
                    <div className='arrow-div' onClick={handlePrev}>
                        <img src={arrow} className='arrow left' />
                    </div>
                    <div className='gallery-images-container'>
                    {gallery_images.map((image)=> {
                        if(isMobile){
                            if(image.id === selectedImage){
                                return (
                                    <div className='gallery-image-container' key={image.id}>
                                        <img src={image.image} alt='gallery' className='gallery-image'/>
                                    </div>
                                )
                            }
                        }else{
                            return (
                                <div className='gallery-image-container' key={image.id}>
                                    <img src={image.image} alt='gallery' className='gallery-image'/>
                                </div>
                            )
                        }
                        
                    })}
                    </div>
                    <div className='arrow-div' onClick={handleNext}>
                        <img src={arrow} className='arrow right' />
                    </div>
                </div>
                <div className='gallery-show-more'>
                    <button className='show-more-btn'>show more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
