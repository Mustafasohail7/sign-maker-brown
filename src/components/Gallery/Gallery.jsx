import './Gallery.css'

const Gallery = () => {

    const options = [
        {id:0, name:'all'},
        {id:1, name:'love'},
        {id:2, name:'stylish'},
        {id:3, name:'3D bold'},
    ]

  return (
    <div className='gallery-div'>
        <div className='gallery-container'>
            <div className='gallery-headings-container'>
                <p className='gallery-heading'>gallery</p>
                <div className='gallery-options-container'>
                {options.map((option) => (
                    <div className='gallery-option' key={option.id}>
                        {option.name}
                    </div>
                ))}
                </div>
            </div>
            <div className='main-gallery-container'>
                <div className='gallery-images-container'>
                    
                </div>
                <div className='gallery-show-more'>
                    <button className='show-more'>show more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
