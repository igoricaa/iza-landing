import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__innerWrapper}>
        <div>
          <span>COPYRIGHT @ IZA</span>
        </div>
        <div>
          <span>TEMPORARY WEBSITE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
