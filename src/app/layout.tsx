import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationWrapper from '@/components/AnimationWrapper';
import Particles from '@/components/ui/particles';

const gtAmericaMono = localFont({
  src: [
    {
      path: './fonts/GTAmericaMono-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/GTAmericaMono-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/GTAmericaMono-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/GTAmericaMono-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-gtAmericaMono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iza.rs'),

  title: {
    default: 'IZA Agency',
    template: '%s | IZA',
  },
  description: 'Official website of IZA.',
  openGraph: {
    title: 'IZA Agency',
    description: 'Official website of IZA Agency.',
    url: 'https://iza.rs',
    siteName: 'IZA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'IZA',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${gtAmericaMono.variable} `}>
        <main>
          <AnimationWrapper />
          <Particles
            className='absolute inset-0 z-[-10]'
            quantity={100}
            ease={80}
            color='#000'
            refresh
          />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
