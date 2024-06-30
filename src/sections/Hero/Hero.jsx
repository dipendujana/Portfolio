import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twiterIcon from '../../assets/twitter-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
   <section id="hero">
       <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile Picture"/>
            <img className={styles.colorMode} 
            src={themeIcon} alt="color mode icon"/>
       </div>
       <div className={styles.info}>
           <h1>Dipendu</h1>
           <br/>
           <h1>Jana</h1>
           <h2>Frontend Devloper</h2>
           <span>
               <a href="# twiter" target="_blank">
                   <img src={twiterIcon} alt="twitter icon"/>
               </a>
               <a href="# twiter" target="_blank">
                   <img src={twiterIcon} alt="twitter icon"/>
               </a>
               <a href="# twiter" target="_blank">
                   <img src={twiterIcon} alt="twitter icon"/>
               </a>
           </span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem laudantium amet explicabo, eum illum.
           </p>
           <a href={CV} download>
               <button className="hover">
                   Resume
               </button>
           </a>
       </div>
   </section>
  )
}

export default Hero;
