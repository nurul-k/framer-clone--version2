// src/app/components/AutoFile.js  
import styles from './AutoFile.module.css';  

const AutoFile = () => {  
  return (  
    <div className={styles.autoFileContainer}>  
      <div className={styles.textContainer}>  
        <h2 className={styles.title}>Integrate Krysta with your E-commerce or ERP plateform</h2>  
        <p className={styles.description}>  
        Getting up and running with Krysta is simple. Choose from a wide range of built-in-house integrations with platforms, ranging from Stripe to Shopify to NetSuite. The Krysta API gives you even more flexibility for custom solutions.  
        </p>  
        <button className={styles.learnMoreButton}>More on integrations</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/third.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={400}  
                />  
            </div> 
    </div>  
  );  
};  

export default AutoFile;  



