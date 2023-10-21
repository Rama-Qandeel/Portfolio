import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./card.scss"

const Card = (card) => {
  return (
    <div className='cardWrapper'>
      <div className='header'>
      <h3 className='h3'>App Design</h3>
      <div className='arrow'><ArrowOutwardIcon/></div>
      </div>
      <div className="line"></div>
      <p>dummy text of the printing and typesetting industry</p>
      <div className='imgContainer'>
    <img src={card.card.img} alt="img" />
    </div>
  </div>
  )
}

export default Card
