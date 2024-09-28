const Footer = () => {
  return (
    <footer className='mt-auto p-6 text-secondary lg:fixed lg:bottom-0 lg:left-0 w-full'>
      <div className='flex justify-between text-xs font-light uppercase -mt-[.5vw]'>
        <span className='ts tsf'>
          <span className='tsl'>
            Copyright <span className="text-[0.5rem]">©</span> IZA
          </span>
        </span>
        <span className='ts tsf'>
          <span className='tsl'>Temporary website</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
