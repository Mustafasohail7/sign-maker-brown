import './ImageInformation.css'

import f_logo_1 from '../../../assets/visa_logo.svg'
import f_logo_2 from '../../../assets/mastercard_logo.svg'
import f_logo_3 from '../../../assets/finance_logo_3.svg'
import f_logo_4 from '../../../assets/finance_logo_4.svg'
import trustpilot from '../../../assets/trustpilot.png'
import trustpilot_reviews from '../../../assets/trustpilot_review.png'
import delivery_logo_1 from '../../../assets/delivery_info_1.svg'
import delivery_logo_2 from '../../../assets/delivery_info_2.svg'
import delivery_logo_3 from '../../../assets/delivery_info_3.svg'
import setup from '../../../assets/tool_free_setup.svg'

const ImageInformation = () => {

    const payment_info = [
        {id:0, src: f_logo_1, name: 'Visa'},
        {id:1, src: f_logo_2, name: 'Mastercard'},
        {id:2, src: f_logo_3, name: 'Discover'},
        {id:3, src: f_logo_4, name: 'American Express'},
    ]

    const delivery_info = [
        {id:0, src: delivery_logo_1, name: '60 day satisfaction guarantee'},
        {id:1, src: delivery_logo_2, name: 'Free shipping'},
        {id:2, src: delivery_logo_3, name: '1-2 day delivery'},
    ]

  return (
    <div className='image-information-div'>
        <div className='image-information-container'>
            <div className='payment-information-container'>
                <div className='payment-info'>
                    {payment_info.map((info)=>(
                        <div key={info.id} className='payment-logo-place'>
                            <img src={info.src} className='payment-logo' />
                        </div>
                    ))}
                </div>
                <div className='trustpilot-container'>
                    <div className='trustpilot-name-place'>
                        <img src={trustpilot} className='trustpilot-name' /> 
                    </div>
                    <div className='trustpilot-reviews-place'>
                        <img src={trustpilot_reviews} className='trustpilot-reviews' />
                    </div>
                    <p>excellent</p>
                </div>
            </div>
            <div className='delivery-info-container'>
                <div className='delivery-features-container'>
                    {delivery_info.map((info)=>(
                        <div className='delivery-feature' key={info.id}>
                            <div className='delivery-feature-icon-place'>
                                <img src={info.src}  className='delivery-feature-icon'/>
                            </div>
                            <p>{info.name}</p>
                        </div>
                    ))}
                </div>
                <div className='setup-div'>
                    <p>tool free setup</p>
                    <div className='setup-place'>
                        <img className='setup' src={setup} />
                    </div>
                </div>
            </div>
            <div className='text-container'>
                <p className='text-heading'>Build your own personal lamp and put a personal touch</p>
                <p className='text-paragraph'>💡 The personal lamp:With our build-it-yourself function, you can put together a personal lamp with the name you want. Build a lamp in your child's name, company name, nickname or something else entirely. Only your imagination sets the limits. 🧸 In the children's room: The LED illuminated letters add a unique and special charm to the children's room, and create a calm and safe atmosphere where your child's name shines with light and joy. In addition to putting a personal touch on the children's room, the lamp gives your child pride and the feeling of his very own space. 🏢 At your company: Give your company a unique touch and highlight its identity by displaying your company name in an elegant light. Our LED-illuminated letters only run on 1.5W each , which means that a lamp of 12 letters only costs DKK 6-12 in power consumption for 200 hours of lighting at full strength. 🧲 Easy assembly: The lamp is assembled easily and quickly without the use of tools , thanks to the magnetic function of the letters. A power supply is included with all lamps, which is used to turn on the lamp's pleasant LED light, which runs on extremely low power consumption.</p>
            </div>
        </div>
    </div>
  )
}

export default ImageInformation
