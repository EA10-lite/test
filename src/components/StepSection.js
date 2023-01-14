import React from "react";
import styles from '../styles/steps.module.css';

// images 
import img1 from '../assets/view1.svg';
import img2 from '../assets/view2.svg';


function Card({ image, text, label }) {

    return (
        <div className={styles.field}>
            <div className={styles.textBox}>
                <h2 className={styles.text}>
                    <div className={styles.label}> {label} </div>
                    <span> { text } </span>
                </h2>
            </div>
            <div className={styles.card}>
                <img src={image} alt="Blinx App" className={styles.img} />
            </div>
        </div>
    )
}

export default function StepSection(){
    const steps = [
        { id:1, text: "Complete the onboarding process", image: img1},
        { id:2, text: "Create payments to be automated", image: img2},
        { id:3, text: "Blinx does the rest", image: img2},
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}> Three easy steps </h1>

            <div className={styles.row}>
                { steps.map(step=> (
                    <Card key={step.id} image={step.image} text={step.text} label={step.id} />
                ))}
            </div>
        </div>

    )
}