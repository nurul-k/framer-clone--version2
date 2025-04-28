// src/app/components/AutoFile.js  
import styles from './AutoFile.module.css';  

const AutoFile = () => {  
  return (  
    <div className={styles.autoFileContainer}>  
      <div className={styles.textContainer}>  
        <h2 className={styles.title}>Reduce your risk of errors and missed deadlines</h2>  
        <p className={styles.description}>  
          The Krysta platform automates sales tax compliance across 11,000 jurisdictions. Our indirect tax software makes sure you always stay ahead of your economic nexus exposure, collect the right sales tax rate on every product sold, and submit filings and remittances on time.  
        </p>  
        <button className={styles.learnMoreButton}>More on AutoFile</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/first.avif"  
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