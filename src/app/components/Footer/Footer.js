import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { 
  FaInstagram, FaPinterest, FaLinkedin, FaTiktok, FaYoutube, 
  FaFacebook, FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>KRYSTA</h1>
        <div className={styles.contactInfo}>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> 10019 NE 141st Street Kirkland WA 98034
            <br />
            United States
          </p>
          <p>
            <FaPhoneAlt className={styles.icon} /> Call us: +919818187261
          </p>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
          <FaPinterest className={styles.socialIcon} />
          <FaLinkedin className={styles.socialIcon} />
          <FaTiktok className={styles.socialIcon} />
          <FaYoutube className={styles.socialIcon} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h4>Product</h4>
          <ul>
            <li>Sales Tax Platform</li>
            <li>Real Time Calculation</li>
            <li>Sales Tax Reports</li>
            <li>Nexus Insights</li>
            <li>Filing</li>
            <li>Integrations</li>
            <li>State Tax Registrations</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Solutions</h4>
          <ul>
            <li>Retail</li>
            <li>Food and Beverage</li>
            <li>Medical</li>
            <li>SaaS</li>
            <li>Services</li>
            <li>Mid-Market Business</li>
            <li>Small Business</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;