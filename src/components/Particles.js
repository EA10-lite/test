import React from "react";
import styles from '../styles/particles.module.css';

import card from '../assets/card.svg';
import logo from '../assets/logo.svg';


export default function (){
    return (
        <div className={styles.container}>
            <div className={styles.particles}>
                
                <img src={logo} alt="Blinx Logo" className={`${styles.item} ${styles.item1} ${styles.image} ${styles.logo}`} style={{"--i": 18}} />
                <img src={card} alt="Blinx Card" className={`${styles.item} ${styles.item2} ${styles.image} ${styles.card}`} style={{"--i": 27}} />
                <img src={logo} alt="Blinx Logo" className={`${styles.item} ${styles.item3} ${styles.image} ${styles.logo}`} style={{"--i": 22}} />
                <img src={card} alt="Blinx Card" className={`${styles.item} ${styles.item4} ${styles.image} ${styles.card}`} style={{"--i": 29}} />

                <div className={`${styles.item} ${styles.item5} ${styles.dot}`} style={{"--i":8}}></div>
                <div className={`${styles.item} ${styles.item6} ${styles.dot}`} style={{"--i":12}}></div>
                <div className={`${styles.item} ${styles.item7} ${styles.dot}`} style={{"--i":14}}></div>
                <div className={`${styles.item} ${styles.item8} ${styles.dot}`} style={{"--i":17}}></div>

                <div className={`${styles.item} ${styles.item9} ${styles.dot}`} style={{"--i":9}}></div>
                <div className={`${styles.item} ${styles.item10} ${styles.dot}`} style={{"--i":13}}></div>
                <div className={`${styles.item} ${styles.item11} ${styles.dot}`} style={{"--i":15}}></div>
                <div className={`${styles.item} ${styles.item12} ${styles.dot}`} style={{"--i":19}}></div>
            </div>
        </div>
    )
}

