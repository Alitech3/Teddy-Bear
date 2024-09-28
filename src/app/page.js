import Image from 'next/image';
import Link from 'next/link';

import '../css/home.css';

import Bear from '../../assets/home/Teddybear.png';

// Todo
// Sticky nav on scroll(?)

export default function Home() {
  return (
    <div>
      <div className="Nav">
        <h1>
          TeddyBear
        </h1>
        <Link href={'./login'} id="Login">Login
        </Link>
        <Link href={'./signup'}id="Signup">Signup
        </Link>
      </div>
      <div className="Mission">
        <p>
        TeddyBear is on a mission to revolutionize the way healthcare is experienced by bridging the gap between communities, patients, and providers. Our platform fosters seamless collaboration, creating a cohesive support system that empowers patients while strengthening the relationships between care teams and the broader community. By integrating cutting-edge technology with a human-centered approach, Teddy Bear aims to deliver personalized, accessible care and foster a sense of connection that goes beyond traditional healthcare models
        </p>
        <Image
          src={Bear}
          width={200}
          height={200}
          alt="Your new pediatric pal"
          style={{marginLeft: 50}}/>
      </div>
    </div>
  );
}
