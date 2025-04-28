'use client';

import styles from './SmartTaxCompliance.module.css';

export default function SmartTaxCompliance() {
  return (
    <section className={styles.container}>
      <div className={styles.badge}>Everything you need</div>
      <h1 className={styles.title}>
        The Smartest Way
        <br />
        to Handle Tax
        <br />
        Compliance
      </h1>
      <p className={styles.description}>
        Struggling with tax compliance? Krysta Compliance automates everything for you:
      </p>
    </section>
  );
}
