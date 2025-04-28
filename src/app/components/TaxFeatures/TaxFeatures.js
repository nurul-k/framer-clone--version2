// components/TaxFeatures.js
/* import Image from 'next/image';

export default function TaxFeatures() {
  return (
    <div className="tax-features-container">
      
      
      <div className="feature-row">
       
        <div className="feature-card">
          <Image
            src="https://framerusercontent.com/images/WmQa79eBVy1Rd4ab06sKQzcvrYw.png" 
            alt="Instant Tax Calculations"
            width={400}
            height={300}
          />
          <h2>Instant Tax Calculations</h2>
          <p>
            Get precise, real-time tax rates at checkout based on location, product type, and tax laws,
            ensuring compliance and a seamless customer experience.
          </p>
        </div>

     
        <div className="feature-card">
          <Image
            src="https://framerusercontent.com/images/7atnPJ1ZzJzHqLT3GqOllRD9mA0.png" 
            alt="Auto Filing and Payments"
            width={400}
            height={300}
          />
          <h2>Auto Filing & Payments</h2>
          <p>
            We automatically file your tax returns and submit payments on time, ensuring compliance without the hassle.
          </p>
        </div>
      </div>

      
      <div className="feature-row">
       
        <div className="feature-card">
          <Image
            src="https://framerusercontent.com/images/oEwQOSmD5YdPcYn2Cz4l1f40O4Y.png" 
            alt="Multi-State Compliance"
            width={400}
            height={300}
          />
          <h2>Multi-State Compliance</h2>
          <p>
            Automatically track tax rules and rates across all states, keeping your business compliant everywhere you sell.
          </p>
        </div>

  
        <div className="feature-card">
          <Image
            src="https://framerusercontent.com/images/dFoh1eJHOxdmzwq8AhrUIvyYMnU.png" 
            alt="Audit Ready Reports"
            width={400}
            height={300}
          />
          <h2>Audit-Ready Reports</h2>
          <p>
            Access clear, detailed tax reports that keep your records organized, making audits and compliance checks stress-free.
          </p>
        </div>
      </div>

    </div>
  );
}

*/



import React from 'react';
import styles from './TaxFeatures.module.css';

const TaxFeatures = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/WmQa79eBVy1Rd4ab06sKQzcvrYw.png"
          alt="Instant Tax Calculations"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Instant Tax Calculations</h3>
        <p className={styles.featureDescription}>
          Get precise, real-time tax rates at checkout based on location, product type, and tax laws, ensuring compliance and a seamless customer experience.
        </p>
      </div>
      <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/7atnPJ1ZzJzHqLT3GqOllRD9mA0.png"
          alt="Auto Filing & Payments"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Auto Filing & Payments</h3>
        <p className={styles.featureDescription}>
          We automatically file your tax returns and submit payments on time, ensuring compliance without the hassle.
        </p>
      </div>
     
    </div>
  );
};

export default TaxFeatures;





/*   

 <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/oEwQOSmD5YdPcYn2Cz4l1f40O4Y.png"
          alt="Multi-State Compliance"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Multi-State Compliance</h3>
        <p className={styles.featureDescription}>
        Automatically track tax rules and rates across all states, keeping your business compliant everywhere you sell.
        </p>
      </div>
      <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/dFoh1eJHOxdmzwq8AhrUIvyYMnU.png"
          alt="Audit-Ready Reports"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Audit-Ready Reports</h3>
        <p className={styles.featureDescription}>
        Access clear, detailed tax reports that keep your records organized, making audits and compliance checks stress-free.
        </p>
      </div>

*/