import React, { useEffect, useState } from 'react';
import styles from '../styles/footer.module.css';

// images
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import { FaLinkedin } from 'react-icons/fa'


export default function Footer({ form_ref }){
    const [ toggle_form, set_toggle_form ] = useState(false);
    const [ email, set_email ] = useState('');
    const [ form_submitted, set_form_submitted ] = useState(false);
    const [ loading, set_loading ] = useState(false);
    const [ error, set_error ] = useState(false);

    const handle_submit = async (e) => {
        e.preventDefault();
        set_loading(true);
        set_error(false);
        set_form_submitted(true);
        // await api.submit({email})
        //     .then(()=> {
        //         set_form_submitted(true);
        //         set_toggle_form(false);
        //         set_email('');
        //     })
        //     .catch((err)=> {
        //         set_loading(false);
        //         set_error(true);
        //     })
        //     .finally(()=> set_loading(false));
    }
    const handle_click = () => {
        if(form_submitted) return;
        set_toggle_form(true);
    }
    useEffect(()=> {
        const form = document.querySelector("#form");
        window.addEventListener("click", (e)=> {
            if(!form.contains(e.target)){
                // set_toggle_form(false);
            }
        })
    },[]);

    return (
        <>
            <div className={styles.container} id="waitlist" ref={form_ref}>
                <div className={styles.heroFooter}>
                    <div id="form">
                        <h1 className={styles.h1}> Get notified when we launch </h1>
                        { !toggle_form && <button 
                            onClick={handle_click} 
                            className={styles.downloadBtn}
                        >  { form_submitted ? "Thank You!!!" : error ?  "Try Again" : "Join our waitlist" }  </button> }
                        { toggle_form && <div className={`${styles.waitlistForm} ${styles.scale_up_hor_center}`}>
                            <form onSubmit={(e)=> handle_submit(e)}>
                                <input 
                                    type="email" 
                                    placeholder="E-mail" 
                                    required={true} 
                                    value={email} 
                                    onChange={(e)=> set_email(e.target.value)}
                                />
                                <button 
                                    type="submit" 
                                    onSubmit={handle_submit}
                                    disabled={loading}
                                > Subscribe </button>
                            </form>
                        </div>
                        }
                    </div>
                </div>

                <footer className={styles.footer}>
                    <ul className={styles.listItemsContainer}>
                        <li className={`${styles.itemsContainer} ${styles.start}`}>
                            <a href="">
                                <img src={facebook} alt="facebook" className={styles.icon} />
                            </a>
                        </li>
                        <li className={styles.itemsContainer}>
                            <a href="https://twitter.com/blinxhq?s=21&t=MtdmscuNMRUnnprczwkoWA">
                                <img src={twitter} alt="twitter" className={styles.icon} />
                            </a>
                        </li>
                        <li className={styles.itemsContainer}>
                            <a href="">
                                <img src={instagram} alt="instagram" className={styles.icon} />
                            </a>
                        </li>
                        <li className={`${styles.itemsContainer} ${styles.end}`}>
                            <a href="https://www.linkedin.com/company/blinxhq/">
                                <FaLinkedin className={styles.icon} color="#000000" />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}