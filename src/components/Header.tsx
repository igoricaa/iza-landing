import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className='lg:fixed lg:top-0 lg:left-0 w-full'>
      <div className='grid grid-cols-5 gap-y-6 p-6 mx-auto'>
        <div className={`${styles.header__logo__wrapper} col-span-2 sm:col-span-1`}>
          <h1 className={`${styles.header__logo__wrapper__logo} ts tsf`}>
            <span className='tsl'>IZA</span>
          </h1>
        </div>
        <div className='row-start-2 sm:row-start-1 sm:col-start-2 flex flex-col w-fit items-center md:mr-[8vw] border-white transition-[border] duration-1000 p-2 border-2 [&:has(.tsl.tsa)]:border-main border-solid group hover:bg-main'>
          <span className='ts tsf group-hover:delay-750'>
            <a href='mailto:info@iza.rs'>
              <span className='tsl text-nowrap'>Grab a coffee?</span>
            </a>
          </span>
          <span className='ts tsf group-hover:delay-750'>
            <a href='mailto:info@iza.rs'>
              <span className='tsl text-nowrap'>info@iza.rs</span>
            </a>
          </span>
        </div>
        <div className='col-span-2 col-start-5 flex flex-col w-fit justify-end justify-self-end md:mr-[8vw] items-center bg-transparent transition-[background] duration-1000 p-2 [&:has(.tsl.tsa)]:bg-main'>
          <span className='ts tsf'>
            <span className='tsl text-nowrap'>Watching your</span>
          </span>
          <span className='ts tsf'>
            <span className='tsl text-nowrap'>digital back</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
