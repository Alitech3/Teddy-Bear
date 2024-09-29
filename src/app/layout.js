import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

import localFont from 'next/font/local';
import './globals.css';
import Head from 'next/head';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Meddy',
  description: 'Your HealthCare provider companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any"/>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Logo/>
        {children}
      </body>
    </html>
  );
}