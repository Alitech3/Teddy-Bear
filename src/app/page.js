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
        <div className='Branding'>
          <Image
            src={Logo}
            width={50}
            height={50}/>
          <h1>
            Meddy
          </h1>
        </div>
        <Link href={'./login'} id="Login">Login
        </Link>
        <Link href={'./signup'}id="Signup">Signup
        </Link>
      </div>
      <div className="Mission">
        <p>
          Meddy aims to connect communities, patient, and providers to provide a coheisive support system.
        </p>
        <Image 
          src={Hat}
          width={110}
          height={110}
          id='Hat'/>
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Your new pediatric pal"
          style={{marginLeft: 50}}/>
      </div>
    </div>
  );
}
