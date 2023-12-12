import Header from '../components/HeaderMain'

const QuotePage = ({isMobile,order,setCartOpen}) => {
  return (
    <>
        <Header order={order} setCartOpen={setCartOpen} />
    </>
  )
}

export default QuotePage
