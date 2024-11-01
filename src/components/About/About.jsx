import React from 'react'
import '../About/About.css'
import aboutImg from '../../assets/about-img.jpg'

const About = () => {
  return (
    
    <div id='about'>
      <br /><br />
        <div className='about-container'>
          <div className='about-text'>
            <h2>ABOUT UNIVERSITY</h2>

         <h1>Nurturing Tomorrow's Leaders Today</h1>
         <br />

         <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <br />
         <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
<br />
         <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>

          </div>
          <div className='about-image'>
            <img src={aboutImg} className='img-one' alt='About Us' />
            <div className="p-btn">
            <i class="ri-play-circle-fill"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About