import React from 'react';
import '../style.css'
import Earth from '../Images/earth.png'

export default function Header() {
  return (
    <header className='header'>
        <img src={Earth} alt='earth'/>
        <h3>MyTravelJournal</h3>
    </header>
  ) 
}
