import React , {useRef} from 'react'
import {useGSAP} from '@gsap/react'
import './style/jobs.css'
const Jobs = () => {

  let h1 = useRef('');
  let jobssec = useRef('');

  
  const hover = (e)=>{
    let text =  e.target.innerText;
    if(text == "Pharmacy"){
      h1.current.innerText = "Skilled pharmacist are always in high demand . You can also enroll in our program after providing the required educational certificates";
      jobssec.current.style.backgroundImage = "url('https://www.healthy-holistic-living.com/wp-content/uploads/2018/02/pharmacy_open.jpg')"
    } 
    else if(text == "Medical"){
      h1.current.innerText = "Medical students have always been a good choice as freshers . demands has grown up by 10%";
      jobssec.current.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.-I2zAZdJH3wddxk0t6a1fAHaEK&pid=Api&P=0&h=220')"
    }
    else if(text == "Chemist"){
      h1.current.innerText = "Chemists are a vital source of new medicinal formulas in the production of new medicines";
      jobssec.current.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.kyVon8I0cI1q_UyaIZYZDAHaEK&pid=Api&P=0&h=220')";
    }
    else if(text == "Ortho-physician"){
      h1.current.innerText = "Orthopedic physical therapy helps to support  surgery.";
      jobssec.current.style.backgroundImage = "url('http://www.stlukesphysicaltherapy.com/StLukes/media/HeaderImages/Specialties/Physical_Therapy/croppedBillboard-6306-Orefield-Physical-Therapy-59.jpg')";
    }
   }


   useGSAP(()=>{
    gsap.to(".heading-job h1 " , {
      translateY:"0%",
      duration:"0.8s",
      stagger:{
        each:0.4
      }
    })
   } , [])
  return (
    <>
    <main className='jobs-main' >
      <div className="heading-job">
        <h1>Providing</h1>
        <h1>jobs</h1>
        <h1>for</h1>
        <h1>over</h1>
        <h1>30+ </h1>
        <h1>Faculties</h1>
      </div>
      <section ref={jobssec} className='jobs-sec'>
        <ul>
          <li onMouseEnter={(e)=> hover(e)}>Pharmacy</li>
          <li onMouseEnter={(e)=> hover(e)}>Medical</li>
          <li onMouseEnter={(e)=> hover(e)}>Chemist</li>
          <li onMouseEnter={(e)=> hover(e)}>Ortho-physician</li>
        </ul>
        <div className="jobs-sec-content">
          <div className="inside-content">

            <div className="inside-heading">
              <h1 ref={h1} >Skilled pharmacist are always in high demand . You can also enroll in our program after providing the required educational certificates</h1>
            </div>

            <div className="inside-btns">
              <h2>Get to know more !</h2>
              <div>
              <button><a href="">Criterias</a></button>
              <button> <a href="">Forms</a></button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Jobs
