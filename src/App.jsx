import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Content from './pages/content/Content'
import Section from './pages/section/Section'
import Toggle from './pages/toggle/Toggle'
import Card from './pages/card/Card'
import Econ from './pages/econ/Econ'
import Sub from './pages/sub/Sub'


function App() {
  const ucer = {
    title: "bmw",
    name: "m5 f90"
    
  }
  return (
    <div>
      <Header />
        <div style={{display:'flex' , gap:'20px'}}>
        
        </div>
        <Section/>
        <About/>
        <Shop/>
        <Content/>
        <Toggle/>
        <Econ/>
        <Sub/>
      <Footer/>
    </div>
  )
}

export default App