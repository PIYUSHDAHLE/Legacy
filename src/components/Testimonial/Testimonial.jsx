import React, { useRef } from 'react'
import '../Testimonial/Testimonial.css'

const Testimonial = () => {

const sliders = useRef();
let tx=0;

  const slideForword = () => {
    if(tx > -50){
       tx -= 25;
    }
    sliders.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackword = () => {
    if(tx < 0){
       tx += 25;
    }
    sliders.current.style.transform = `translateX(${tx})`
  }

  return (
<div className='testi'>

        <h2>Testimonials</h2>
        <h1>What Student Says</h1>
<br />
<br />

<div className="t-box">


<i class="ri-arrow-right-circle-fill btn-right" onClick={slideForword}></i>
<i class="ri-arrow-left-circle-fill btn-left" onClick={slideBackword}></i>

<div className="slider">
  <ul ref={sliders}> 

    <li> 
      <div className="slide">
<div className="user-info">
  
  <img src="https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg?t=1664802036" alt="Student1" />
  <div className="mini">
  <h3>Emma Watson</h3>
  <span>Student University</span>
  </div>
</div>
  <p>Choosing to pursue my degree at Legacy was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
      </div>
    </li>
    <li> 
      <div className="slide">
<div className="user-info">
  
  <img src="https://i.pinimg.com/736x/32/df/d2/32dfd2909a72161e6e110b18e6d630c4.jpg" alt="Student1" />
  <div className="mini">
  <h3>Chris Hemsworth</h3>
  <span>Student University</span>
  </div>
</div>
  <p>Choosing to pursue my degree at Legacy was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
      </div>
    </li>
    <li> 
      <div className="slide">
<div className="user-info">
  
  <img src="https://external-preview.redd.it/robert-downey-jr-might-return-in-a-future-avengers-film-v0-4CNrmGTDP_MKCXpGdYfU8zFEV5LOzPDZ1lxbsqJlO8w.jpg?auto=webp&s=aa84200902e604102fea261d8f9ceaba83990451" alt="Student1" />
  <div className="mini">
  <h3>Robert Downey Jr.</h3>
  <span>Student University</span>
  </div>
</div>
  <p>Choosing to pursue my degree at Legacy was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
      </div>
    </li>
    <li> 
      <div className="slide">
<div className="user-info">
  
  <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="Student1" />
  <div className="mini">
  <h3>Daniel Radcliffe</h3>
  <span>Student University</span>
  </div>
</div>
  <p>Choosing to pursue my degree at Legacy was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
      </div>
    </li>

  </ul>
</div>


</div>

    </div>
  )
}

export default Testimonial