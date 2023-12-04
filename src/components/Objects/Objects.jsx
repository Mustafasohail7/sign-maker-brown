import './Objects.css'

import objects_1 from '../../assets/objects_1.svg'
import objects_2 from '../../assets/objects_2.svg'
import objects_3 from '../../assets/objects_3.svg'

const Objects = () => {

    const objects = [
      {id:0,name:'34+ satisfied customers', text:'kunder | hele denmark', image:objects_1},
      {id:1,name:'gratis fragt', text:'alle order', image:objects_2},
      {id:2,name:'hurtig levering', text:'1-2 dage', image:objects_3},
    ]

  return (
    <div className='objects-div'>
      <div className='objects-container'>
        {objects.map((object) => (
            <div className='object'>
                <div className='object-logo'>
                    <img src={object.image} alt='object' />
                </div>
                <div className='object-text'>
                    <p className='object-main-text'>{object.name}</p>
                    <p className='object-side-text'>{object.text}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Objects
