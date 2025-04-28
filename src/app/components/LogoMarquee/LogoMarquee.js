// src/app/components/LogoMarquee.js  
import styles from './LogoMarquee.module.css';  

const logos = [  
  'Quantum',  
  'Echo Valley',  
  'PULSE',  
  'APEX',  
  'Celestial',  
  'Acme Corp',  
  'Quantum',  
  'Echo Valley'  
];  

const LogoMarquee = () => {  
  return (  
    <div className={styles.marqueeContainer}>  
      <div className={styles.marquee}>  
        {logos.map((logo, index) => (  
          <div key={index} className={styles.logo}>  
            {logo}  
          </div>  
        ))}  
      </div>  
      <div className={styles.marquee}>  
        {logos.map((logo, index) => (  
          <div key={index} className={styles.logo}>  
            {logo}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default LogoMarquee;  