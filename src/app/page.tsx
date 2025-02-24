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
            href='https://realvibestudio.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 relative before:invisible before:opacity-0 hover:before:visible hover:before:opacity-100 before:content-["Intro_video_is_not_ours_:)"] before:w-32 before:h-10 before:bg-main before:text-end before:content-white before:text-[10px] before:flex before:items-center before:justify-center before:px-2 before:absolute before:-bottom-10 before:right-0 before:z-10'
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>6. Real Vibe</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-1 lg:col-start-4 2xl:col-start-5'>
          <Link
            href='https://thundertopteam.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>7. Thunder Top Team</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-2 lg:col-start-4 2xl:col-start-5'>
          <Link
            href='https://wukiyo.com/'
            target='_blank'
            className='flex flex-col uppercase text-xs leading-none font-light hover:bg-main pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 '
          >
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>8. Wukiyo</span>
            </span>
          </Link>
        </div>
        <div className='col-span-2 flex justify-start lg:row-start-3 lg:col-start-4 2xl:col-start-5 mt-4'>
          <div className='flex flex-col uppercase text-xs leading-none font-light delay-[0.850s] hover:bg-main hover:delay-0 pt-1 pl-1 pb-0.5 pr-1 lg:-mt-1 relative cursor-pointer group'>
            <span className='ts tsf text-nowrap'>
              <span className='tsl'>- and a few others</span>
            </span>
            <div className='hidden sm:flex flex-col gap-y-3 text-white bg-main absolute top-5 left-0 transition-[max-height] duration-700 delay-0 h-auto max-h-0 group-hover:max-h-96'>
              <Link
                href='https://www.instagram.com/travelboutique.rs//'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-4 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  <span className=''>Travel Boutique - copy and voiceover</span>
                </span>
              </Link>
              <Link
                href='https://matijablagojevic.com/'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  Matija Blagojevic - website development
                </span>
              </Link>
              <Link
                href='https://warpstudio.rs/'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  Warp Studio - website design and development
                </span>
              </Link>
              <Link
                href='https://granddental.rs/'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  Grand Dental - website design and development
                </span>
              </Link>
              <Link
                href='https://cassini.rs/'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  <span className=''>
                    Cassini - website design and development
                  </span>
                </span>
              </Link>
              <Link
                href='https://www.instagram.com/mojakasa.rs'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-0.5 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  <span className=''>Moja Kasa - copy and voiceover</span>
                </span>
              </Link>
              <Link
                href='https://revelation-agency.com/'
                target='_blank'
                className='flex flex-col uppercase text-xs leading-none font-light hover:underline decoration-white underline-offset-4 decoration-1 pt-1 pl-4 pb-4 pr-4 lg:-mt-1 '
              >
                <span className='text-nowrap'>
                  <span className=''>
                    Revelation Agency - website development
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
