import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


const ProductCarousel = ({products}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }    

    return (
        <Slider {...settings}>
            {/* {products.map((product) => (
                <div 
                className='product-item'
                // className={`product ${index === currentIndex ? 'active' : ''}`}
                >
                    <div 
                    className='product-item-img-place'
                    >
                        <img src={product.image} 
                        className='product-item-img' 
                        alt='product' />
                    </div>
                    <div 
                    className='product-item-info'
                    >
                        <p 
                        className='product-item-name'
                        >{product.name}</p>
                        <p 
                        className='product-item-price'
                        >$ {product.price}</p>
                    </div>
                </div>
            ))} */}
            <div style={{border: '1px solid black'}}>
                hello
            </div>
            <div>
                hi
            </div>
        </Slider>
        
  )
}

export default ProductCarousel
