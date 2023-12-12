import Header from '../components/HeaderMain'

const LightBoxPage = ({isMobile,order,setCartOpen}) => {
  return (
    <>
        <Header order={order} setCartOpen={setCartOpen}/>
    </>
  )
}

export default LightBoxPage
