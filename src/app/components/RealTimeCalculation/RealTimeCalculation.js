// src/app/components/RealTimeCalculation.js  
import styles from './RealTimeCalculation.module.css';  

const RealTimeCalculation = () => {  
  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer}>  
        <h2 className={styles.title}>Sell across more channels with less effort</h2>  
        <p className={styles.description}>  
          With Krysta, it’s easy for multichannel sellers to expand to new markets and manage sales tax compliance. Our cloud-based platform enables your business to scale seamlessly. AI-driven product categorization, a real-time calculation engine, a flexible API, and aggregated transaction reports remove your administrative burden.  
        </p>  
        <button className={styles.learnMoreButton}>More on real-time calculation</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/second.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={400}  
                />  
            </div>  
    </div>  
  );  
};  

export default RealTimeCalculation;  