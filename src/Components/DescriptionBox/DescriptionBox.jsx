import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae distinctio sunt tempora cumque reiciendis facere exercitationem mollitia voluptatem vel, corrupti voluptatum voluptate officia dicta? Nobis, sunt dignissimos! Provident, aliquam.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
