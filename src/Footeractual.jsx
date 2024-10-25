import React from 'react'
import './style/Footeractual.css'
import { FaCopyright , FaPenFancy} from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
function Footeractual() {
    useGSAP(()=>{
        gsap.to(".footer-actual ul li" , {
            scale:1 ,
            duration:1,
            fontWeight:500,
            stagger:1
        })
    } , [])
  return (
    <div className='body-footer' >
      <div className="footer-actual">
        <ul>
            <li> <FaCopyright></FaCopyright> All Rights reserved </li>
            <li> <FaPenFancy></FaPenFancy> Overright reserved </li>
            <li> <BsCupHot></BsCupHot> Hot cofee products</li>
        </ul>
      </div>

    </div>
  )
}

export default Footeractual
