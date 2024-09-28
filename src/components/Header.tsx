import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className='lg:fixed lg:top-0 lg:left-0 w-full'>
      <div className='flex justify-between items-center p-6 max-w-[2160px] mx-auto'>
        <div className={styles.header__logo__wrapper}>
          <h1 className={`${styles.header__logo__wrapper__logo} ts tsf`}>
            <span className='tsl'>IZA</span>
          </h1>
        </div>
        <div className='flex flex-col items-center md:mr-[8vw] bg-transparent transition-[background] duration-1000 p-2 [&:has(.tsl.tsa)]:bg-main'>
          <span className='ts tsf'>
            <span className='tsl'>Watching your</span>
          </span>
          <span className='ts tsf'>
            <span className='tsl'>digital back</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
