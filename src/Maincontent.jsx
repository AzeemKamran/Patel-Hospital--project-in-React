import React, { useEffect, useRef, useState }  from 'react'
import './style/Maincontent.css'
import {  FaSquareFacebook } from "react-icons/fa6";
import {FaInstagramSquare} from 'react-icons/fa'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


 function Maincontent () {

    const load = () => {
        
            gsap.to(".heading", {
                translateY:0,        
                opacity:1
            })
            gsap.to(".image-box", {
                translateY:0,
                opacity:1
            })
            
        }
    
    useEffect(()=> load, [])
    let secref = useRef(null)
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to(secref.current , {
            scale:1.2,
            scrollTrigger:{
                trigger:".sec-2",
                markers:false,
                start:"90% 70%", 
                end:"bottom 30%", 
                scrub:1
            }
        })
        // gsap.to(secref, {
        //     transition:"all 1s ease-in",
        //     opacity:1,
        //     duration:0.5,
        //     backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6a-BlzYL-DFgz68pH2LHgbB78CD08n60dTMgD9N2lQ&s')",
        //     scrollTrigger:{
        //         trigger:"main",
        //         markers:true,
        //         start:"90% 30%", 
        //         end:"bottom 10%"
        // }})
        gsap.to("button", {
            scale:1,
            yoyo:true,
            stagger:{
                each:1
            }
        })
    })
    const changeimg = (e) => {
        if(e.target.textContent== "Donate"){
            gsap.fromTo(secref.current, {
                duration:0.2,
                opacity:0.3
            }, {
                
                duration:0.2,
                backgroundImage:"url('https://noonealone.org/wp-content/uploads/2022/01/donation-scaled.jpg')",
                opacity:1
            })
        }
        else if(e.target.textContent== "Register"){ 
            gsap.fromTo(secref.current, {
                duration:0.1,
                opacity:0.5
            }, {
                duration:0.2,
                backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtD8Oe0CXSHCARih5S3Qu_mFQfrNvZsA9R4D11JDyjg&s')",
                opacity:1
            })
        }
    }
    
    const removeimg = () => {
    // secref.current.style.transition = "all 0.4s ease-in"
    secref.current.style.backgroundColor = "#ffedbd"
    }
    
    
 return (
  <>
  <main>
       <section>
        <div className="heading">
            <h1>Welcome to Patel Hospital</h1>
            <h2>Karachi's leading hospital aiming to create  better enviroment for future </h2>
            <div className="btns">
                <h3>Find us on social media</h3>
                <button><FaSquareFacebook/></button>
                <button><FaInstagramSquare/></button>
                <button>X</button>
            </div>
        </div>
            <div className="image-box">
                <img  src='https://patel-hospital.org.pk/wp-content/uploads/2021/07/AR-18.png' />
            </div>
    </section>

    <section  className='sec-2'>
        <div ref={secref} className="heading">
            <h1>Become a part of the movement </h1>
            <div className="box">
                <button onMouseOver={changeimg} onMouseOut={removeimg} className='btn-box'>Donate</button>
                <button  onMouseOver={changeimg} onMouseLeave={removeimg} className='btn-box' >Register</button>
            </div> 
        </div>
        <div className="image-box-1">
            <h2>Submit your donations to save a child's future at <a href="">Patel Academy</a></h2> 
        </div>
    </section>

  </main>
  </>
 )
  
}

export default Maincontent
