import React from 'react';
import styles from './TaxFeatures.module.css';

const TaxFeaturestwo = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureCard}>
        <img
          src="/images/map.avif"
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
          src="/images/taxReport.avif"
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

export default TaxFeaturestwo;

