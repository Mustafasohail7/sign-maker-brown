import './SignPreview.css'

import {useState} from 'react'

import ImageComponent from './ImageComponent/ImageComponent'
import ImageInformation from './ImageInformation/ImageInformation'
import Options from './Options/Options'

import letters_manchester from '../../data/manchesterLetterData'

const SignPreview = ({isMobile,setOrder}) => {

  const [userText,setUserText] = useState('man')
  const [signImages,setSignImages] = useState([])

  const renderSigns = (newText) => {

    let letter_signs = []
    
    letter_signs.push(letters_manchester.find(
      (letter) => letter.title === 'adapter'
    ))
  
    for (const char of newText.toUpperCase()){
      let matchingLetter
      if(char === ' '){
        matchingLetter = letters_manchester.find(
          (letter) => letter.title === 'space'
        )
      }else{
        matchingLetter = letters_manchester.find(
          (letter) => letter.title === `${char}`
        )
      }
      if(matchingLetter) {
        letter_signs.push(matchingLetter)
      }
    }
    setSignImages(letter_signs)
  }

  return (
    <div className='sign-preview-div'>
        <div className='sign-preview-container'>
            <div className='image-component-div'>
                <ImageComponent userText={userText} signImages={signImages}/>
                {!isMobile && <ImageInformation/>}
            </div>
            <div className='options-div'>
                <Options isMobile={isMobile} setUserText={setUserText} render={renderSigns} setOrder={setOrder} />
                {isMobile && <ImageInformation/>}
            </div>
        </div>
    </div>
  )
}

export default SignPreview
