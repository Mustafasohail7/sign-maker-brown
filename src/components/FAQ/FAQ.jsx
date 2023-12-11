import './FAQ.css'

import { useState } from 'react'

import caret from '../../assets/caret-up.svg'
import dots from '../../assets/dots.svg'

const FAQ = () => {

    const [selected, setSelected] = useState(null)

    const faqs = [
        {id:0,question: 'Hvordan fungerer det?', answer: 'Bogstaverne kører på strøm og sættes sammen ved hjælp af magneter, der viderefører strømmen, så bogstaverne øjeblikkeligt lyser. Der er altså ikke brug for værktøj eller lignende. Strømforsyning følger automatisk altid gratis med i din ordre. NB: Der sidder et beskyttelsesfolie på bogstaverne når du modtager dem, som skal pilles af.'},
        {id:1,question:'Hvad hører med til lampen?', answer:'Der medfølger en strømforsyning, som passer til det land, du bor i. Derudover medfølger der en fjernbetjening, som kan styre lysstyrke, farve og effekter. Der medfølger også en vægmonteringsplade, som gør det nemt at sætte bogstaverne op på væggen.'},
        {id:2,question:'Er det muligt at få et mellemrum-stykke med til lampen?', answer:'Ja, det er muligt at få et mellemrum-stykke med til lampen. Det er dog ikke muligt at få et mellemrum-stykke med til lampen, hvis du vælger at købe en lampe med 3 bogstaver.'},
        {id:3,question:'Er jeres produkter EU godkendt?',answer:'Ja, vores produkter er CE godkendt og lever op til alle EU krav.'},
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
