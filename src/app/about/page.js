import Logo from '@/components/Logo';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return(
    <div className="relative flex flex-col w-full overflow-y-auto">
    <main className="h-screen text-Text flex p-5 w-full items-center justify-center text-center">
      <div>
        <Logo />
        <h1 className="text-6xl font-bold tracking-widest my-10">Meddy is the future.</h1>
        <h2 className="text-3xl font-medium tracking-wide my-10">A hypothetical one at least.</h2>
        <p className="text-3xl my-10">
            Meddy was created for <Link className="font-bold" href="https://www.shellhacks.net/" target="_blank">ShellHacks 2024</Link> as a mock up for an all-in-one healthcare solution by<br/> <Link href="https://github.com/Alitech3" target="_blank"><u>Ali Chapman</u></Link>, <Link href="https://github.com/myr124" target="_blank"><u>Eric George</u></Link>, <Link href="https://github.com/aidenletourneau" target="_blank"><u>Aiden Letourneau</u></Link>, & <Link href="https://github.com/same-difference" target="_blank"><u>Dianneth Murillo</u></Link>.
        </p>
      </div>
    </main>
      <Footer />
      </div>
  );
}