import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center grow'>
      <div className='grid grid-cols-5 px-md1 uppercase'>
        <div className='col-span-5 lg:col-span-2 2xl:col-start-2 flex flex-col gap-y-2'>
          <span>2024.</span>
          <span>Here for support</span>
        </div>
        <div className='col-start-5 col-span-1 text-base font-light text-right md:mr-[8vw] max-lg:hidden'>
          <span className='tsf underline decoration-main underline-offset-4 decoration-1'>
            What we do?
          </span>
        </div>
        <div className='max-lg:my-lg3 2xl:col-start-3 col-span-5 2xl:col-span-3 md:mr-[8vw] text-2xl lg:text-7xl font-light text-right row-start-2'>
          <div className='flex flex-col'>
            <span className='text-nowrap'>
              <span className='text-main'>:</span>Web / App
            </span>
            <span className='text-nowrap'>Development,</span>
            <span className='text-nowrap'>Design and</span>
            <span className='text-nowrap'>Social Media</span>
            <span className='text-nowrap'>
              Marketing<span className='text-main'>:</span>
            </span>
          </div>
        </div>
        <div className='2xl:col-start-2 2xl:col-span-2 col-span-5 row-start-3 2xl:row-start-2 flex flex-col items-start xs:items-end xs:flex-row gap-y-4 xs:gap-x-8'>
          <div className='flex flex-col text-xs'>
            <span>We will create your</span>
            <span>website/app from scratch, or</span>
            <span>revamp it. It will</span>
            <span>be beautiful and super</span>
            <span>fast and thus make your</span>
            <span>audience very happy.</span>
          </div>
          <div className='flex flex-col text-xs self-end xs:self-auto'>
            <span>We will create a strategy</span>
            <span>for your social media</span>
            <span>profiles. From content</span>
            <span>creation to advertising -</span>
            <span>we can set up & optimize</span>
            <span>your digital presence.</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-5 gap-x-8 xs:gap-x-0 px-md1 mt-lg3 2xl:mt-20'>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-1 2xl:col-start-2'>
          <Link
            href='https://marijavolkman.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>1. Marija Volkman</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-1 2xl:col-start-2'>
          <Link
            href='https://bhive.agency'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>2. Beehive Agency</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-2 2xl:col-start-3'>
          <Link
            href='https://www.instagram.com/bistro_grad/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>
              3. Bistro Grad{' '}
              <span className='hidden sm:inline'>Hometown Food</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-2 2xl:col-start-3'>
          <Link
            href='https://roger.rs'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>4. Roger Directors</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-3 2xl:col-start-4'>
          <Link
            href='https://www.instagram.com/tatamata_konoba/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>5. TataMata Konoba</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-3 2xl:col-start-4'>
          <Link
            href='https://matijablagojevic.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>6. Matija Blagojevic</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-4 2xl:col-start-5'>
          <Link
            href='https://wukiyo.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>7. Wukiyo</span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-4 2xl:col-start-5'>
          <Link
            href=''
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='tsf text-nowrap'>- and a few others</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
