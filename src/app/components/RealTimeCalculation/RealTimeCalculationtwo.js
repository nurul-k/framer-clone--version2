// src/app/components/RealTimeCalculation.js  
import styles from './RealTimeCalculation.module.css';  

const RealTimeCalculationtwo = () => {  
  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer}>  
        <h2 className={styles.title}>Get support when you need it most</h2>  
        <p className={styles.description}>  
        Behind the TaxJar platform is a knowledgeable customer service team ready to help you be successful. From onboarding, to educational resources, to award-winning support with dedicated email and phone response times, we are committed to making your sales tax experience run smoothly. 
        </p>  
        <button className={styles.learnMoreButton}>Krysta support center</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/fourth.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={400}   
                />  
            </div>  
    </div>  
  );  
};  

export default RealTimeCalculationtwo;  






