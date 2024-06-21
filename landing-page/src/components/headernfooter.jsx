import React from "react";
import '../stylesheets/headernfooter.css';
import githubLogo from '../images/github-logo.png';
import linkedinLogo from "../images/linkedin-logo.png";
import instagramLogo from '../images/instagram-logo.png';



function HeadernFooter({clase}){
  return(
    <div className= {clase}>
      <p className="name">Fernando Garcia</p>
      <div className="logo-cont">
        <div className='github-cont'>
          <a href="https://github.com/elrvco">
            <img
              className="github-logo"
              src={githubLogo}
              alt='github link'
            />
          </a>
        </div>
        <div className="linkedin-cont">
          <a href="https://www.linkedin.com/in/fernando-garcia-meza-b1b808136">
            <img
              className= 'linkedin-logo'
              src= {linkedinLogo}
              alt= "linkedin link"
            />
          </a>
        </div>
        <div className="instagram-cont">
          <a href="https://www.instagram.com/fernandip/">
            <img
              className= 'instagram-logo'
              src= {instagramLogo}
              alt= 'instagram link'
            />
          </a>
        </div>
      </div>
    </div>






  )
}

export default HeadernFooter