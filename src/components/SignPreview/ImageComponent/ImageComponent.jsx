import './ImageComponent.css'

import { useState } from 'react'

import bg_1 from '../../../assets/sign_background_1.png'
import bg_2 from '../../../assets/sign_background_2.png'
import bg_3 from '../../../assets/sign_background_3.png'
import bg_4 from '../../../assets/sign_background_4.png'
import bg_5 from '../../../assets/sign_background_5.png'
import bg_6 from '../../../assets/sign_background_6.png'

const ImageComponent = () => {

  const images = [
    {id:0, name: 'Three Windows', src: bg_1},
    {id:1, name: 'Brick Wall', src: bg_2},
    {id:2, name: 'Work Space', src: bg_3},
    {id:3, name: 'Paper Posters', src: bg_4},
    {id:4, name: 'Table Outdoors', src: bg_5},
    {id:5, name: 'Empty Room Wall', src: bg_6},
  ]

  const [selectedImage,setSelectedImage] = useState(images[0])

  return (
    <div className='image-component-container'>
      <div className='image-preview-div'>
      </div>
      <div className='image-preview-container'>
        <img src={selectedImage.src} className='image-preview-bg' alt='sign preview here'/>
        <div className='image-slider-container'>
          {images.map((image)=>(
            <div key={image.id} className='slider-image-place'>
              <img src={image.src} alt={image.name} className='slider-' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageComponent
