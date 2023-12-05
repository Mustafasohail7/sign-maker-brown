
import Slider from "react-slick";

import star from '../../assets/star.svg'
import profile_1 from '../../assets/profile_1.png'
import profile_2 from '../../assets/profile_2.png'
import profile_3 from '../../assets/profile_3.png'

import './SliderCarousel.css';

const SliderCarousel = () => {


    const reviews = [
        {id:0,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:1,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:2,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:3,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:4,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:5,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:6,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:7,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:8,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
    
    ]
    

    const settings = {
        dots: true,
        //   infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    rows: 3,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    rows: 2,
                    slidesPerRow: 1,
                }
            }
        ]
    }


    return (
        <Slider {...settings} className="slider-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-div">
            <div className="review-container">
                <div className="stars-container">
                    {review.stars.map((x, index) => (
                        <div key={index} className="star-place-review">
                            <img src={star} alt="star" className="star-review" />
                        </div>
                    ))}
                </div>
                <div className="review-content">
                    {review.review}
                </div>
                <div className="review-profile-container">
                    <div className="review-profile">
                        <img src={review.image} className="review-profile-img" />
                    </div>
                    <div className="review-name-container">
                        <p className="reviewer-name">{review.name}</p>
                        <p className="reviewer-title">{review.title}</p>
                    </div>
                </div>
            </div>
            </div>
          ))}
          
        </Slider>
    );
  }

export default SliderCarousel