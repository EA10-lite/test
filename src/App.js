import React, { useEffect, useRef } from 'react';
import styles from './styles/app.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from "./components/Navbar"
import StepSection from './components/StepSection';



export default function App(){
  gsap.registerPlugin(ScrollTrigger);
  const form_ref = useRef();

  const handle_click = () => {
    form_ref.current.scrollIntoView({
      behaviour: "smooth"
    });
  }

  useEffect(()=>{
    document.body.addEventListener("mousemove", evt=> {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set("#cursor", {
          x: mouseX,
          y: mouseY
      })

      gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
      })
    })
  },[])

  return ( 
    <main>
      <Navbar handle_click={handle_click} />
      <div id="cursor" className={styles.cursor}></div>
      <div className={styles.view} id="smooth-content">
        <Header />
        <StepSection />
        <Footer form_ref={form_ref} />
      </div>
    </main>
  )
}