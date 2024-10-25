import React from 'react'
import Maincontent from './maincontent'
import Maincontent2 from './Maincontent2'
import Maincontent3 from './Maincontent3'
import Footer from './Footer'
import Footeractual from './Footeractual'
const Page1 = () => {
  return ( 
    <div style={{backgroundColor:"#ffc8a3" , margin:0}} >
    <Maincontent></Maincontent>
    <Maincontent2></Maincontent2>
    <Maincontent3></Maincontent3>
    <Footer></Footer>
    </div>
  )
}

export default Page1
