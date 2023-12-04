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

{reviews.map((review)=> (
    <div key={review.id} className="review-container">
        <div className="stars-container">
            {review.stars.map((x, index) => (
                <div key={index} className="star-place">
                    <img src={star} alt="star" className="star" />
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
))}