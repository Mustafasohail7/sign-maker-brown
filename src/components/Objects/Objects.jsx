import './Objects.css'

const Objects = () => {

    const objects = []

  return (
    <div className='objects-div'>
      <div className='objects-container'>
        {objects.map((object) => (
            <div className='object'>
                <div className='object-logo'></div>
                <div className='object-text'>
                    <p className='object-main-text'>bruh</p>
                    <p className='object-side-text'></p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Objects
