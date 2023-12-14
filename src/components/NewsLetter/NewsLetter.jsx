import './NewsLetter.css'

import ellipse from '../../assets/newsletter_ellipse.svg'
import arrow from '../../assets/newsletter_arrow.svg'
import envelope from '../../assets/newsletter_envelope.png'

const NewsLetter = () => {
  return (
    <div className='newsletter-div'>
        <div className='newsletter-container'>
            <div className='newsletter-absolute'>
                <div className='newsletter-circle-place'>
                    <img src={ellipse} className='newsletter-circle' />
                </div>
            </div>
            <div className='newsletter-absolute'>
                <div className='newsletter-circle-place'>
                    <img src={envelope} className='newsletter-envelope' />
                </div>
            </div>
            <p className='newsletter-heading'>Sign up for our newsletter</p>
            <p className='newsletter-text'>If you want news, good offers and the opportunity to participate in competitions, sign up for our newsletter.</p>
            <div className='newsletter-input-container'>
                <input className='newsletter-input' placeholder='Sign up for news letter?' />
                <button className='newsletter-btn'>subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
