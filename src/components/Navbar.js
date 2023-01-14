import React, { useEffect, useState } from "react";
import styles from '../styles/navbar.module.css';

// images
import logo from '../assets/full-logo.svg';
import logo2 from '../assets/logo-alt.svg';


export default function Navbar({ handle_click }){
    const [ is_intersecting, set_is_intersecting ] = useState(false);

    useEffect(()=>{
        const nav = document.querySelector("#nav");
        const mask = document.querySelector("#mask");

        const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0];

            window.addEventListener("scroll", ()=>{
                if(entry.isIntersecting){
                    if(mask.getBoundingClientRect().top < nav.offsetHeight) {
                        set_is_intersecting(true) 
                    }
                }
                else {
                    set_is_intersecting(false);
                }
            });
        });  

       observer.observe(mask);
    },[]);

    return (
        <nav className={styles.navbar} id="nav">
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <a href="/">
                        <img src={ !is_intersecting ? logo : logo2 } alt="Blinxhq" className={styles.logo} />
                    </a>
                </div>

                <div className={styles.btnContainer}>
                    <span onClick={handle_click} className={`${styles.darkbtn} ${is_intersecting && styles.elevate}`}> Join Our Waitlist </span>
                </div>
            </div>
        </nav>
    )
}