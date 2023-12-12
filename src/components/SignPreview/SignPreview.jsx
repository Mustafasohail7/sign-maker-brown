import './SignPreview.css'

import ImageComponent from './ImageComponent/ImageComponent'
import ImageInformation from './ImageInformation/ImageInformation'
import Options from './Options/Options'

const SignPreview = ({isMobile}) => {
  return (
    <div className='sign-preview-div'>
        <div className='sign-preview-container'>
            <div className='image-component-div'>
                <ImageComponent/>
                {!isMobile && <ImageInformation/>}
            </div>
            <div className='options-div'>
                <Options isMobile={isMobile}/>
                {isMobile && <ImageInformation/>}
            </div>
        </div>
    </div>
  )
}

export default SignPreview
