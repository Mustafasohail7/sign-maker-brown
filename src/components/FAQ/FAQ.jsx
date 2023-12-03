import './FAQ.css'

const FAQ = () => {

    const faqs = []

  return (
    <div className='faq-div'>
        <div className='faq-container'>
            <p className='faq-heading'>frequently asked questions</p>
            {faqs.map((faq) => (
                <div key={faq.id} className='faq'>
                    <div className='faq-question-holder'>
                        <p className='faq-question'></p>
                        {/* caret down */}
                    </div>
                    <div className='faq-answer'>
                    </div>
                </div>
            ))}
        </div>  
    </div>
  )
}

export default FAQ
