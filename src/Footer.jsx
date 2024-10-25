import React, { useEffect } from 'react'
import './style/footer.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
const Footer = () => {
    useGSAP(() => {
        gsap.fromTo(" .footer-heading h1 ", {
            translateY: 100,
        }, {
            duration: 0.1,
            translateY: -10,
            yoyo: true,
            transition: 'all 0.3s ease-out ',
            stagger: {
                each:0.5,
                amount:0,
            },
            scrollTrigger: {
                trigger: ".footer-heading",
                start: "top 70%",
                markers: false,
            }
        })

        gsap.timeline().to(".video-div", {
            scrollTrigger: {
                trigger: "video",
                start: "top 100%",
                markers: false,
            },
        }).to(".video-div", {
            opacity: 1,
            duration: 10,
            visibility: "visible",
        })
            .to(".video-div", {
                display: "none",

            }).to(".credits", {
                opacity: 1,
                visibility: "visible",

            })

    }, [])
    return (
        <div>
            <div className="footer-heading">
                <h1> A</h1>
                <h1>Project</h1>
                <h1>of </h1>
                <h1>Alkhidmat</h1>
                <h1>Foundation</h1>
            </div>

            <div className="video-div">
                <video typeof='video/mp4' preload='auto' controls muted src="Atif Aslam's Heart Touching Performance Live at Star GIMA Awards 2015 Full HD Video.mp4"></video>
            </div>

            <div className="credits">
                <div className="card-1">
                    <h2>Chief Executive</h2>
                    <ul>
                        <li>Affan waheed</li>
                        <li>Syed daniyal hassan</li>
                        <li>Murad ali shah</li>
                        <li>Durram khan</li>
                    </ul>
                </div>
                <div className="card-2">
                    <h2>Chief Director</h2>
                    <ul>
                        <li>Affan waheed</li>
                        <li>Syed daniyal hassan</li>
                        <li>Murad ali shah</li>
                        <li>Durram khan</li>
                    </ul>
                </div>
                <div className="card-1">
                    <h2>Account manager </h2>
                    <ul>
                        <li>Affan waheed</li>
                        <li>Syed daniyal hassan</li>
                        <li>Murad ali shah</li>
                        <li>Durram khan</li>
                    </ul>
                </div>


            </div>
            <div className="credits">

                <div className="card-1">
                    <h2>Chief of security</h2>
                    <ul>
                        <li>Affan waheed</li>
                        <li>Syed daniyal hassan</li>
                        <li>Murad ali shah</li>
                        <li>Durram khan</li>
                    </ul>
                </div>

                <div className="card-1">
                    <h2>Chief Executive</h2>
                    <ul>
                        <li>Affan waheed</li>
                        <li>Syed daniyal hassan</li>
                        <li>Murad ali shah</li>
                        <li>Durram khan</li>
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Footer
