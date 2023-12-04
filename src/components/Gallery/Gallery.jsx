import './Gallery.css'

import { useState } from 'react'

import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'

const Gallery = () => {

    const [selectedOption, setSelectedOption] = useState('all')

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

  return (
    <div className='gallery-div'>
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
                <div className='gallery-images-container'>
                {gallery_images.map((image)=> (
                    <div className='gallery-image-container' key={image.id}>
                        <img src={image.image} alt='gallery' className='gallery-image'/>
                    </div>
                ))}
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
