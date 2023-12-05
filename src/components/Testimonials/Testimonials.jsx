import './Testimonials.css'

import star from '../../assets/star.svg'

import SliderCarousel from './SliderCarousel'

const Testimonials = () => {

  const stars = [0,1,2,3,4]

  return (
    <div className='testimonials-div'>
        <div className='testimonials-container'>
            <div className='testimonials-heading'>
                <p>testimonials</p>
                <div className='testimonials-subheading-container'>
                    <p>37 amneldeser street</p>
                    <p>.</p>
                    <p>fremgrande</p>
                </div>
                {/* {renderStars()} */}
                <div className='testimonials-stars'>
                    {stars.map((x, index) => {
                        return (
                          <div key={index} className='star-place'>
                            <img src={star} alt='star' className='star' />
                          </div>
                        )
                    })}
                </div>
            </div>
            <div className='testimonials'>
              <SliderCarousel />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
