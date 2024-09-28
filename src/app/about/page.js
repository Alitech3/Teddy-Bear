import Image from 'next/image';
import Link from 'next/link';
import './about.css';

import Bear from '../../../assets/home/Logo.png';

export default function Home() {
  return(
    <main>
      <div>
        <div id='Logo'>
          <Image src={Bear}
            width={100}
            height={100}/>
        </div>
        <h1>Meddy is the future.</h1>
        <h2>A hypothetical one at least.</h2>
        <p>
            Meddy was created for <Link href="https://www.shellhacks.net/" target="_blank">ShellHacks 2024</Link> as a mock up for an all-in-one healthcare solution by:<br/> <Link href="https://github.com/Alitech3" target="_blank"><i>Ali Chapman</i></Link>, <Link href="https://github.com/myr124" target="_blank"><i>Eric George</i></Link>, <Link href="https://github.com/aidenletourneau" target="_blank"><i>Aiden Letourneau</i></Link>, & <Link href="https://github.com/same-difference" target="_blank"><i>Dianneth Murillo</i></Link>.
        </p>
      </div>
    </main>
  );
}