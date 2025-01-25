import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Content from './pages/content/Content'
import Section from './pages/section/Section'
import Toggle from './pages/toggle/Toggle'


function App() {
  return (
    <div>
      <Header/>
        <Section/>
        <About/>
        <Shop/>
        <Content/>
        <Toggle/>
      <Footer/>
    </div>
  )
}

export default App