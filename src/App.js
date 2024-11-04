import './App.css';
import HeadernFooter from './components/headernfooter.jsx';
import Technology from './components/technology.jsx';
import Project from './components/project.jsx';

function App() {
  return (
    <div className='App'>
      <HeadernFooter
       clase= 'header'
      />
      <div className= 'intro-container'>
        <div className= 'text-container' >
          <h1 className= 'title1'>Nice to meet you!</h1>
          <h1 className= 'title2'>I'm <span className='underline'>Fernando Garcia</span>.</h1>
          <p className= 'description'>Based in Mexico, I'm a JR front-end developer passionate about building accesible web apps and software.</p>
          <a href='#contact-container' className= 'contact1'>CONTACT ME</a>
        </div>
        <div className= 'picture-container'>
          <img
          className='profile-picture'
          alt='fernando'
          src={require('./images/profile-pic-background.png')}
          />
        </div>
      </div>

      <div className= 'technologies-cont'> 
        <div className= 'upper-cont'>
          <Technology
            text='HTML'
          />
          <Technology
            text='CSS'
          />
          <Technology
            text='Javascript'
          />
      </div>
        <div className='lower-cont'>
          <Technology
            text= 'React'
          />
          <Technology
            text= 'SQL'
          />
          <Technology
            text='FIGMA'
          />
        </div>
      </div>
      <div className='project-header'>
        <h1 className='projects-title'>Projects</h1>
        <a href='#contact-container' className='contact2'>CONTACT ME</a>
      </div>
      <div className='projects-container'>
        <Project
          title= 'Calculator' /*use as title the same name of the repo on github*/
          tech1='HTML'
          tech2='CSS'
          tech3='JavaScript'
          imgClass= 'calculator'
        />

        <Project
          title= 'IP-Address-Tracker'
          tech1='CSS'
          tech2='React'
          tech3='API'
          imgClass= 'tracker-image'
        />

        <Project
          title= 'pokedex'
          tech1= 'HTML'
          tech2= 'JavaScript'
          tech3= 'API'
          imgClass= 'pokedex'
        />


      </div>
      <div id='contact-container'>
        <h1>Contact</h1>
        <div className='contact-content'>
          <div className='text-cont'>
            <p>I am eager to learn more about your company and discuss how I can contribute. </p>
            <p>Please scan or <strong>click</strong> the WhatsApp QR code to send me a message.</p>
            <p> Alternatively, you can reach out to me via LinkedIn by clicking on one of the LinkedIn logos.</p>
          </div>
          <div className='qr-cont'>
            <a href='https://wa.me/522224425673'>
              <img className='qr-image' alt='whatsapp qr code' src={require('./images/whatsapp910-qr.png')}/>
            </a>
          </div>
        </div>
      </div>
      <div id='footer-cont'>
        <HeadernFooter
          clase= 'footer'
        />
      </div>
      
    </div>
  );
}

export default App;
