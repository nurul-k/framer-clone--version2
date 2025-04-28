// src/app/components/TrustedByBusinesses.js  
import styles from './TrustedByBusinesses.module.css';

const TrustedByBusinesses = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trusted by Businesses of All Sizes</h2>
      <p className={styles.description}>
        {"From startups to enterprises, businesses across industries rely on Krysta Compliance to stay tax-compliant without the headaches."}
      </p>
      <div className={styles.featureContainer}>
        <div className={styles.featureBox}>
          <div className={styles.icon}>📊</div>
          <h3 className={styles.featureTitle}>Krysta Calculate</h3>
          <p className={styles.featureDescription}>
            {"- Accurate sales tax calculations"} <br />
            {"- Real-time rates across 14,000+ jurisdictions in the U.S., always current and always accurate."}
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.icon}>🔗</div>
          <h3 className={styles.featureTitle}>Integration ecosystem</h3>
          <p className={styles.featureDescription}>
            {"- Streamlined reporting"} <br />
            {"- Detailed reports organized by state, jurisdiction, and filing frequency to simplify your compliance. "}
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.icon}>📄</div>
          <h3 className={styles.featureTitle}>Krysta AutoFile</h3>
          <p className={styles.featureDescription}>
            {" - Automated filing service <br />  "}
            {"- We prepare and submit your sales tax returns on time, every time.  "}
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.icon}>🔐</div>
          <h3 className={styles.featureTitle}>Secure data encryption</h3>
          <p className={styles.featureDescription}>
            {"- Ensure your data's safety with top-tier encryption.  "}
          </p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default TrustedByBusinesses;