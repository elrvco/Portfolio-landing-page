import React from "react";
import '../stylesheets/project.css';

function Project({title,tech1,tech2,tech3,imgClass}){
  return(
  <div className='project'>
    <a className='project-link' href={`https://elrvco.github.io/${title}/`}>
      <img 
      className={imgClass}
      src={require(`../images/${imgClass}.png`)}
      alt='project preview'
      />
    </a>
    <p className='project-title'>{title}</p>
    <div className="tools-container">
      <p className='tools'>{tech1}</p>
      <p className="tools">{tech2}</p>
      <p className="tools">{tech3}</p>
    </div>
    <div className="link-container">
      <a className="code" href={`https://github.com/elrvco/${title}`}>Code</a>
      <a className='live' href={`https://elrvco.github.io/${title}/`}>Live</a>
    </div>
  </div>
  )

}

export default Project;