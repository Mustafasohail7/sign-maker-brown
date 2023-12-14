import './BannerLetters.css'

import logo from '../../assets/logo_white.svg'
import wave from '../../assets/long_waves.svg'

import { FaCheck } from 'react-icons/fa'

const BannerLetters = () => {

    const attribs = [
        {id:0, name:'60 dages tilfredshedsgaranti '},
        {id:1, name:'Saetter et personlight praeg'},
        {id:2, name:'Ekstremt lavt stromforbrug'},
        {id:3, name:'100% skraeddersyet lampe'},
        {id:4, name:'Skaber en rolig & tryg atmosfaere'},
        {id:5, name:'Bornevenligt & ingen fare for stod'},
    ]

  return (
    <div className='letter-banner-div'>
        <div className='letter-banner-static-waves-container'>
            <img className='letter-banner-waves' src={wave} />
            <img className='letter-banner-waves' src={wave} />
        </div>
      <div className='letter-banner-container'>
        <div className='letter-banner-logo-container'>
            <img className='letter-banner-logo' src={logo} />
            <div className='letter-banner-waves-container'>
                <img className='letter-banner-waves' src={wave} />
                <img className='letter-banner-waves' src={wave} />
            </div>
        </div>
        <div className='letter-banner-attribs one'>
            {attribs.map((attrib) => {
                if(attrib.id < 3){
                    return(
                        <div key={attrib.id} className='letter-banner-attrib'>
                            <FaCheck className='letter-banner-attrib-icon' />
                            <p className='letter-banner-attrib-text'>{attrib.name}</p>
                        </div>
                    )
                }
            })}
        </div>
        <div className='letter-banner-attribs two'>
            {attribs.map((attrib) => {
                if(attrib.id >= 3){
                    return(
                        <div key={attrib.id} className='letter-banner-attrib'>
                            <FaCheck className='letter-banner-attrib-icon' />
                            <p className='letter-banner-attrib-text'>{attrib.name}</p>
                        </div>
                    )
                }
            })}
        </div>
      </div>
    </div>
  )
}

export default BannerLetters
