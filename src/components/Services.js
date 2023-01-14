import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import styles from '../styles/services.module.css';

gsap.registerPlugin(ScrollTrigger);


export default function Services(){
    const timeline = gsap.timeline();
    const parentContainer = useRef();
    
    useEffect(()=>{
        let mm = gsap.matchMedia();
        const sections = gsap.utils.toArray(".service");

        mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
            sections.forEach((section, index)=>{
                if(index < sections.length - 1){
                    timeline.to(section,{
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            end: "bottom 50%",
                            toggleClass:"active",
                        }
                    })
                } else if(index === sections.length - 1) {
                    timeline.to(section, {
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            classList: "active"
                        }
                    })
                }
            })
        });

        mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
            window.onload = function(){
                timeline.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: parentContainer.current,
                        scrub: true,
                        pin: true,
                        // snap: 1 / (sections.length - 1),
                        end: () => "+=" + parentContainer.current.offsetWidth,
                        invalidateOnRefresh: true,
                    }
                })
            }
        });
    },[timeline]);


    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.content} id="content" ref={parentContainer}>    
                <div className={`${styles.field} service`}>
                    <h2 className={styles.h2}>
                        Automate <br /> payments 
                    </h2>
                </div>
                <div className={`${styles.field} service`}>
                    <h2 className={styles.h2}>
                        Save & Invest
                    </h2>
                </div>
                <div className={`${styles.field} service`}>
                    <h2 className={styles.h2}>
                        Budget <br /> properly 
                    </h2>
                </div>
                <div className={`${styles.field} service`}>
                    <h2 className={styles.h2}>
                        Sync Income <br /> analysis
                    </h2>
                </div>
            </div>
        </div>
    )
}
