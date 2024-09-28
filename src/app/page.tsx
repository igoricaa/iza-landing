import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center grow'>
      <div className='grid grid-cols-5 px-md1 uppercase'>
        <div className='col-span-5 lg:col-span-2 2xl:col-start-2 flex flex-col gap-y-2'>
          <span className='ts tsf'>
            <span className='tsl'>2024.</span>
          </span>
          <span className='ts tsf'>
            <span className='tsl'>Here for support</span>
          </span>
        </div>
        <div className='col-start-5 col-span-1 text-base font-light text-right md:mr-[8vw] max-lg:hidden overflow-hidden h-6'>
          <span className='ts tsf underline decoration-main underline-offset-4 decoration-1'>
            <span className='tsl'>What we do?</span>
          </span>
        </div>
        <div className='max-lg:my-lg3 2xl:col-start-3 col-span-5 2xl:col-span-3 md:mr-[8vw] text-2xl lg:text-7xl font-light text-right row-start-2'>
          <div className='flex flex-col'>
            <span className='ts tsf text-nowrap [&&]:leading-none'>
              <span className='tsl'>
                <span className='text-main'>:</span>Web / App
              </span>
            </span>
            <span className='ts tsf text-nowrap [&&]:leading-none'>
              <span className='tsl'>Development,</span>
            </span>
            <span className='ts tsf text-nowrap [&&]:leading-none'>
              <span className='tsl'>Design and</span>
            </span>
            <span className='ts tsf text-nowrap [&&]:leading-none'>
              <span className='tsl'>Social Media</span>
            </span>
            <span className='ts tsf text-nowrap [&&]:leading-none'>
              <span className='tsl'>
                Marketing<span className='text-main'>:</span>
              </span>
            </span>
          </div>
        </div>
        <div className='2xl:col-start-2 2xl:col-span-2 col-span-5 row-start-3 2xl:row-start-2 flex flex-col items-start xs:items-end xs:flex-row gap-y-4 xs:gap-x-8'>
          <div className='flex flex-col text-xs'>
            <span className='ts tsf'>
              <span className='tsl'>We will create your</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>website/app from scratch,</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>or revamp it. It will</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>be beautiful and super</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>fast and thus make your</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>audience very happy.</span>
            </span>
          </div>
          <div className='flex flex-col text-xs self-end xs:self-auto'>
            <span className='ts tsf'>
              <span className='tsl'>We will create a strategy</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>for your social media</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>profiles. From content</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>creation to advertising -</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>we can set up & optimize</span>
            </span>
            <span className='ts tsf'>
              <span className='tsl'>your digital presence.</span>
            </span>
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
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>1. Marija Volkman</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-1 2xl:col-start-2'>
          <Link
            href='https://bhive.agency'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>2. Beehive Agency</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-2 2xl:col-start-3'>
          <Link
            href='https://www.instagram.com/bistro_grad/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>
                3. Bistro Grad{' '}
                <span className='hidden sm:inline'>Hometown Food</span>
              </span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-2 2xl:col-start-3'>
          <Link
            href='https://roger.rs'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>4. Roger Directors</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-3 2xl:col-start-4'>
          <Link
            href='https://www.instagram.com/tatamata_konoba/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>5. TataMata Konoba</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-3 2xl:col-start-4'>
          <Link
            href='https://matijablagojevic.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>6. Matija Blagojevic</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-4 2xl:col-start-5'>
          <Link
            href='https://wukiyo.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>7. Wukiyo</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-4 2xl:col-start-5'>
          <Link
            href=''
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>- and a few others</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
