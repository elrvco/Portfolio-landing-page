import React from 'react';
import '../stylesheets/technology.css';

function Technology({text}){
  return(
    <div className={`${text}-container`}>
      <p className={text}>{text}</p>
      <img 
        className='technology-image'
        src={require(`../images/${text.toLowerCase()}-logo.png`)}
        alt={`${text} logo `}
      />
    </div>


  )
}

export default Technology;