import React from 'react';
import Location from '../Images/location.png'

export default function Card(props) {
  return (
      <div>
          <div className='card_item'>
              
              <img src={props.item.imageURL} alt="travelimage"/>
              
              <div className='card_item_rhs'>

                  <div className='card_item_location'>
                      <img src={Location} alt='location_icon'/>
                      <p style={{letterSpacing: '2px'}}>{props.item.location}</p>
                      <a href={props.item.mapLink} target="_blank" rel="noreferrer noopener" style={{color:'#918E9B', textDecoration:'underline'}}>View on Google Maps</a>
                  </div>

                  <h2>{props.item.title}</h2>
                  <h5>{props.item.startDate} - {props.item.endDate}</h5>
                  <p>{props.item.description}</p>
              
              </div>
          </div>
          <hr />
      </div>  
  )
}
