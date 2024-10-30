import React from 'react'
import'./page2.css'
import pic1 from '../../assets/pic-1.png'
import pic2 from '../../assets/pic-2.png'
import pic3 from '../../assets/pic-3.png'
import logo1 from '../../assets/log-1.png'
import logo2 from '../../assets/log-2.png'
import logo3 from '../../assets/log-3.png'


const page2 = () => {
  return (
    <div className='container'>
      <div className="title-box">
        <h5>Programs & Services</h5>
        <h1>What We Offer</h1>
      </div>
      <div className="collection">

        <div className=" program">
           <img src={pic1} alt="" />
          <div className="caption">
            <img src={logo1} className='w-10' alt="" />
            <h1>Graduation Degree</h1>
          </div>
        </div>
        <div className=" program">
           <img src={pic2} alt="" />
          <div className="caption">
            <img src={logo2} className='w-10' alt="" />
            <h1>Master Degree</h1>
          </div>
        </div>
        <div className=" program">
           <img src={pic3} alt="" />
          <div className="caption">
            <img src={logo3} className='w-10' alt="" />
            <h1>Ph. D. Degree</h1>
          </div>
        </div>

      </div>
 
    </div>
  )
}

export default page2