import './FAQ.css'

import { useState } from 'react'

import caret from '../../assets/caret-up.svg'
import dots from '../../assets/dots.svg'

const FAQ = () => {

    const [selected, setSelected] = useState(null)

    const faqs = [
        {id:0,question: 'How does it work?', answer: 'The letters run on electricity and are connected using magnets that conduct the electricity, so the letters light up instantly. No tools or similar are needed. Power supply is always included for free with your order. Note: There is a protective film on the letters when you receive them, which needs to be removed.'},
        {id:1,question:'What is included with the lamp?', answer:'A power supply is included that matches the country you live in. Additionally, a remote control is included that can control brightness, color, and effects. A wall mounting plate is also included, making it easy to mount the letters on the wall.'},
        {id:2,question:'Is it possible to get a space piece with the lamp?', answer:'Yes, it is possible to get a space piece with the lamp. However, it is not possible to get a space piece with the lamp if you choose to buy a lamp with 3 letters.'},
        {id:3,question:'Are your products EU approved?',answer:'Yes, our products are CE approved and comply with all EU requirements.'},
    ]

    const handleFAQ = (id) => {
        if(selected===id){
            setSelected(null)
        }else{
            setSelected(id)
        }
    }

  return (
    <div className='faq-div'>
        <div className='dots-place faq-c'>
            <img src={dots} className='dots' />
        </div>
        <div className='dots-place faq-c right'>
            <img src={dots} className='dots' />
        </div>
        <div className='faq-container'>
            <p className='faq-heading'>frequently asked questions</p>
            <div className='faq-cont'>
            {faqs.map((faq) => (
                <div key={faq.id} className='faq'>
                    <div className='faq-question-holder' onClick={()=>handleFAQ(faq.id)}>
                        <p className='faq-question'>
                            {faq.question}
                        </p>
                        <div className='caret-img-place'>
                            <img src={caret} className={`caret-img ${faq.id===selected ? '' : 'rotate'}`} />
                        </div>
                    </div>
                    <div className={`faq-answer ${selected===faq.id ? 'visible' : ''}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
            </div>
        </div>  
    </div>
  )
}

export default FAQ
