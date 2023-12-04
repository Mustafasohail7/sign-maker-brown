import './Footer.css'

import facebook_logo from '../../assets/facebook.svg'
import instagram_logo from '../../assets/instagram.svg'
import twitter_logo from '../../assets/twitter.svg'
import linkedin_logo from '../../assets/linkedin.svg'

const Footer = () => {

  const logos = [
    {id:0,name:'facebook',link:'https://www.facebook.com/',image:facebook_logo},
    {id:1,name:'instagram',link:'https://www.instagram.com/',image:instagram_logo},
    {id:2,name:'twitter',link:'https://x.com/',image:twitter_logo},
    {id:3,name:'linkedin',link:'https://www.linkedin.com/',image:linkedin_logo},
  ]

  return (
    <div className='footer-div'>
        <div className='footer-container'>
          <div className='footer-with-logo'> 
            <div className='logo-container'>
            
            </div>
            <div className='short-bio'>

            </div>
            <div className='socials-div'>
            {logos.map((logo)=> (
              <a href={logo.link}>
                <img className='social-logos' src={logo.image} alt={`${logo.name} logo`}/>
              </a>
            ))}
            </div>
          </div>
          <div className='footer-info-container'>

          </div>
        </div>  
    </div>
  )
}

export default Footer
