import React, { useContext } from 'react'
import './DescriptionBox.css'
import { ShopContext } from '../../Context/ShopContext'

const DesciptionBox = (props) => {

  const {product} = props

  return (
    <div className='descriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        {/* <div className="discriptionbox-nav-box fade">Reviews (122)</div> */}
      </div>
      <hr />
      <div className="discriptionbox-description">
        <p>{product.long_description}</p>
      </div>
    </div>
  )
}

export default DesciptionBox