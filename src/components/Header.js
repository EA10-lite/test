import React, { useEffect } from "react";
import styles from '../styles/header.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

// assets
import phone from '../assets/AppHome.png';

// component
import Services from "./Services";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

export default function Header(){

    useEffect(()=>{
        gsap.to("#mask",{
            width: "100vh",
            height: "100vh",
            scale: 10,
            scrollTrigger: {
                trigger: "#phone",
                start: "top center",
                scrub: true,
            }
        })
    },[])

    return (
        <header className={styles.header}>
            <Particles />
            <div className={styles.masks}>
                <div className={styles.mask} id="mask" />
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <div className={styles.shapes}>
                        <div className={`shape ${styles.shape1} ${styles.shape}`}></div>
                        <div className={`shape ${styles.shape2} ${styles.shape}`}></div>
                        <div className={`shape ${styles.shape3} ${styles.shape}`}></div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.textBox}>
                            <h1 className={styles.heroText} id="hero-text">
                                Payments <br />
                                <span > Reimagined </span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.phoneViewContainer} id="phone">
                        <img src={phone} className={styles.phone} alt="Blinx App" />
                    </div>
                </div>
                <Services />
            </div>
        </header>
    )
}