import React from 'react'
import Navbar from './components/navbar/Navbar'
import Page1 from './components/home/Page1'
import Page2 from './components/home/Page2'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Page1/>
      <Page2/>
      <About/>
      <Campus/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App