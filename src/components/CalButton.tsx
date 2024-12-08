'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalButton({ className }: { className?: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery-session' });
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <button
      className={[className].join(' ')}
      data-cal-namespace='discovery-session'
      data-cal-link='iza.rs/discovery-session'
      data-cal-config='{"layout":"month_view"}'
      style={{ outline: 'none', cursor: 'pointer' }}
    >
      <span className='ts tsf group-hover:delay-750'>
        <span className='tsl text-nowrap'>Grab a coffee?</span>
      </span>
      <span className='ts tsf group-hover:delay-750'>
        <span className='tsl text-nowrap'>hello@iza.rs</span>
      </span>
    </button>
  );
}
