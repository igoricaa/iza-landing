import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__innerWrapper}>
        <div className={styles.header__logo__wrapper}>
          <h1 className={styles.header__logo__wrapper__logo}>IZA</h1>
        </div>
        <div>
          <p>nesto drugo </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
