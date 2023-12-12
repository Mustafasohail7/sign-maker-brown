import './Options.css'

import DropDown from './DropDown'

const Options = ({isMobile,setUserText,render}) => {

  const rating = 4.8
  const symbol = '€'
  const total = 924.96

  const symbols = [
    {id:0, symbol:'❤️'},
    {id:1, symbol:'&'},
    {id:2, symbol:'#'},
    {id:3, symbol:'()'},
    {id:4, symbol:'{}'},
    {id:5, symbol:'$'},
    {id:6, symbol:'@'},
  ]

  const size_options = [
    {id:0, name:'160'},
    {id:1, name:'180'},
    {id:2, name:'200'},
  ]

  const text_place_options = [
    {id:0, name:'On table'},
    {id:1, name:'Top'},
    {id:2, name:'Bottom'},
  ]

  const connector_options = [
    {id:0, name:'Normal'},
    {id:1, name:'Wall'},
    {id:2, name:'Window'},
  ]

  const connection_options = [
    {id:0, name:'Adopter'},
    {id:1, name:'Plug'},
    {id:2, name:'Bruh'},
  ]

  const handleChange = (e) => {
    const newText = e.target.value
    setUserText(newText)
    render(newText)
  }


  return (
    <div className='options-container'>
      <div className='name-container'>
        <div className='name-placeholder-div'>
          <p className='name-container-name'>Build-it-yourself lamp</p>
          <div className='options-review-container'>
            <p className='options-review'>★★★★</p>
            <p className='options-review-text'>{rating} review</p>
          </div>
        </div>
        {isMobile && <div className='total-container'>
          {/* //TODO something about the symbol */}
            <p>{symbol} {total} = total price</p>
        </div>}
      </div>
      <div className='text-input'>
        <div className='price-container'> 
          <p className='write-text-here label'>write text here</p>
          {!isMobile && <div className='total-container'>
          {/* //TODO something about the symbol */}
            <p>{symbol} {total} = total price</p>
          </div>}
        </div>
        {/* //TODO add input working  */}
        <input type='text' 
        placeholder='good morning' 
        onChange={handleChange}
        />
      </div>
      <div className='symbols-input'>
        <p className='symbols-input-text label'>select symbols</p>
        <div className='symbols-container'>
          {symbols.map((symbol) => (
            <div key={symbol.id} className='symbol'>
              <p>{symbol.symbol}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='size-input'>
          <p className='size-input-text label'>select text size</p>
          <DropDown classname="size-dropdown" options={size_options} />
      </div>
      <div className='misc-input'>
          <div className='text-place-option'>
            <p className='text-place label'>text place</p>
            <DropDown classname="text-place-dropdown" options={text_place_options}/>
          </div>
          <div className='connector-option'>
            <p className='connector label'>connector</p>
            <DropDown classname="connector-dropdown" options={connector_options}/>
          </div>
          <div className='connection-option'>
            <p className='connection label'>Connection with</p>
            <DropDown classname="connection-dropdown" options={connection_options}/>
          </div>
      </div>
      <div className='add-to-cart-container'>
        <button className='add-to-cart'>Add to Basket</button>
      </div>
    </div>
  )
}

export default Options
