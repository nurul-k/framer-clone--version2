

import styles from './Hero.module.css';  
//import Image from 'next/image';  
import Link from 'next/link';  

const Hero = () => {  
    return (  
        <div className={styles.heroContainer}>  
            <div className={styles.textContainer}>  
                <h1 className={styles.heroTitle}>  
                    <span className={styles.gradientText}>  
                        Sales Tax <br/> Compliance, <br/> Simplified  
                    </span>  
                </h1>  
                <p className={styles.heroDescription}>  
                    Sales tax is complex. Krysta makes it simple with automated calculations, reporting, and filing.  
                </p>  
                <Link href="/contact" className={styles.signupButton}>  
                    Get started  
                </Link>  
            </div>  
            <div className={styles.imageContainer}>  
                <img  
                    src="/images/woman.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={400}  
                    height={600}  

                />  
            </div>  
        </div>  
    );  
};  

export default Hero;  