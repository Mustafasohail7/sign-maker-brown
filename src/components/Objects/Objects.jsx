import './Objects.css'

import objects_1 from '../../assets/objects_1.svg'
import objects_2 from '../../assets/objects_2.svg'
import objects_3 from '../../assets/objects_3.svg'

const Objects = () => {

    const objects = [
      {id:0,name:'100+ happy customers', text:'customer from denmark', image:objects_1},
      {id:1,name:'fast delivery', text:'1-2 day', image:objects_2},
      {id:2,name:'free delivery', text:'on all orders', image:objects_3},
    ]

  return (
    <div className='objects-div'>
      <div className='objects-container'>
        {objects.map((object) => (
            <div key={object.id} className='object-div'>
            <div className={`object ${object.id===2 ? 'no-line' : ''}`}>
                <div className='object-logo'>
                    <img src={object.image} alt='object' />
                </div>
                <div className='object-text'>
                    <p className='object-main-text'>{object.name}</p>
                    <p className='object-side-text'>{object.text}</p>
                </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Objects
