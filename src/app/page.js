import Image from 'next/image';
import Link from 'next/link';

import '../css/home.css';

import Logo from '../../assets/home/Logo.png';
import Hat from '../../assets/home/Hat.png';

// Todo
// Sticky nav on scroll(?)

export default function Home() {
  return (
    <div className='LandingContainer'>
      <div className="Nav">
        <div className='Branding flex flex-row items-center absolute top-2 left-15 transform -translate-x-1/2'>
          <Image
            src={Logo}
            width={50}
            height={50}/>
          <h1 style={{fontSize: "1.3em"}}>
            Meddy
          </h1>
        </div>
        <Link href={'./login'} id="Login">Login
        </Link>
        <Link href={'./signup'} id="Signup">Signup
        </Link>
      </div>
      <div className="Mission">
        <div className='flex flex-col text-left text-4x1'>
          <h1 style={{fontSize: "3em", color: "white"}} className='font-bold text-4xl'>Welcome to <b style={{fontSize: "1.5em"}}>Meddy!</b></h1>
          <p style={{fontSize: "1.5em", paddingTop: "20px", color: "white"}}  className='text-2x1'>
            Meddy aims to standardize patient-provider medication information
          </p>
        </div>
        <Image
          src={Logo}
          width={250}
          height={250}
          alt="Your new pediatric pal"
          style={{marginLeft: 50}}/>
      </div>
    </div>
  );
}
