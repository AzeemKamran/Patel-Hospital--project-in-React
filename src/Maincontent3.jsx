import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './style/Maincontent3.css'
import { TbRubberStamp } from 'react-icons/tb'
const Maincontent3 = () => {
  let hed1 = useRef("")
  const hed2 = useRef("")
  let imgref = useRef("")
  const showimg = (e) => {
    imgref.current.style.visibility = "visible"
    console.log(e)
  }
  const hideimg = () => {
    imgref.current.style.visibility = "hidden"
  }

  useGSAP(() => {
    gsap.fromTo(".head h1", {
      rotateX: "90deg",
      opacity: 0,
      duration: 1
    }, {
      rotateX: "0deg",
      opacity: 1,
      duration: 1, scrollTrigger: {
        markers: false,
        trigger:".head h1",
        start: "top 70%"
      }
    })

    gsap.fromTo(hed2.current, {
      rotateX: "90deg",
      opacity: 0,
      duration: 1
    }, {
      rotateX: "0deg",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger:hed2.current,
        markers: false,
        start: "top 80%"
      }
    })

    gsap.fromTo(hed1.current, {
      rotateX: "90deg",
      opacity: 0,
      duration: 1
    }, {
      rotateX: "0deg",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        markers: false,
        trigger:hed1.current,
        start: "top 90%"
      }
    })
  }, [])

  return (
    <div>
      <section className='sec-4'>
        <div className="blog">
          <div className="head">
            <div className="img-div">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkyOX5PLNppMPN-v0X0e19RzhZ_ijfa-k8mDrMk-l7Q&s" />
            </div>
            <h1 onMouseOut={hideimg} onMouseOver={showimg}>Dr Parween khattak</h1>
          </div>
          <div ref={imgref} className="details">
            <div className="arrow"></div>
            <ul>
              <li><button>Facebook</button></li>
              <li><button>Insta</button></li>
              <li><button>Twitter</button></li>
            </ul>
          </div>
          <h2 ref={hed1}>It has been an absolute honour to have worked for 10 years here . Lorem ipsum dolor, sit amet consectetur  quo ab debitius soluta, est eaque totam quibusdam, exercitationem ratione dignissimos deserunt porro sit odit?</h2>
        </div>

        <div className="blog">
          <div className="head">
            <div className="img-div">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_n0Jly_bBEqCI6q4AxJF8bozarCguSNsSOo5iAwmQ=s900-c-k-c0x00ffffff-no-rj" />
            </div>
            <h1>Dr Berg Considine</h1>
          </div>
          <h2 ref={hed2} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat amet laudantium culpa at ab nobis perspiciatis harum provident. Est libero consequuntur veritatis doloremque illum nobis quod, beatae rerum consequatur quia.</h2>
        </div>

        {/* <div className="blog">
          <div className="head">
            <img src="" />
            <h1></h1>
          </div>
          <h2></h2>
        </div> */}

      </section>
    </div>
  )
}

export default Maincontent3
