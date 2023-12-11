import './SignPreview.css'

import ImageComponent from './ImageComponent/ImageComponent'
import ImageInformation from './ImageInformation/ImageInformation'
import Options from './Options/Options'

const SignPreview = () => {
  return (
    <div className='sign-preview-div'>
        <div className='sign-preview-container'>
            <div className='image-component-div'>
                <ImageComponent/>
                <ImageInformation/>
            </div>
            <div className='options-div'>
                <Options/>
            </div>
        </div>
    </div>
  )
}

export default SignPreview
