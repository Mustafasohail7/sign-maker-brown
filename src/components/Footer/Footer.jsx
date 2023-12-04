import './Footer.css'

import facebook_logo from '../../assets/facebook.svg'
import instagram_logo from '../../assets/instagram.svg'
import twitter_logo from '../../assets/twitter.svg'
import linkedin_logo from '../../assets/linkedin.svg'
import logo from '../../assets/logo-white.svg'

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
            <div className='footer-logo-container'>
              <img src={logo} className='logo' />
            </div>
            <div className='short-bio'>
            Ønsker du nyheder, gode tilbud samt mulighed for at deltage i konkurrencer, så tilmeld dig vores nyhedsbrev.
            </div>
            <div className='socials-div'>
            {logos.map((logo)=> (
              <a key={logo.id} href={logo.link} target='_blank' rel='noreferrer'>
                <img className='social-logos' src={logo.image} alt={`${logo.name} logo`}/>
              </a>
            ))}
            </div>
          </div>
          <div className='footer-info-container'>
              <div className='footer-info-part'>
                  <p className='footer-info-heading'>
                  Hovedmenu
                  </p>
                  <div className='footer-info-items'>
                    <p>Om as</p>
                    <p>byg seiv</p>
                    <p>produckter</p>
                    <p>kontakt</p>
                    <p>FAQ</p>
                  </div>
              </div>
              <div className='footer-info-part'>
                  <p className='footer-info-heading'>
                  betingelser
                  </p>
                  <div className='footer-info-items'>                  
                    <p>handelsbetingesler</p>
                    <p>Refusionspolitik</p>
                    <p>Persondata- & cookiepolitik</p>
                    <p>Servicevilkår</p>
                  </div>

              </div>
              <div className='footer-info-part'>
                  <p className='footer-info-heading'>
                  information
                  </p>
                  <div className='footer-info-items'>
                    <p>Bendixen Neon ApS</p>
                    <p>Finderupvej 11</p>
                    <p>8800 Viborg</p>
                    <p>CVR: 83459816</p>
                    <p>TLF: 42 22 55 26</p>
                    <p>EMAIL: info@abchome.dk</p>
                  </div>
              </div>

          </div>
        </div>  
    </div>
  )
}

export default Footer
