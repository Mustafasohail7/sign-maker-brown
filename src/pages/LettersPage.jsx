import Header from '../components/HeaderMain'
import SignPreview from '../components/SignPreview/SignPreview'

const LettersPage = ({isMobile}) => {
  return (
    <>
        <Header/>
        <SignPreview isMobile={isMobile}/>
    </>
  )
}

export default LettersPage
