import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

import Bear from "../../../assets/home/Logo.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-y-auto">
      <div className="flex justify-end items-center">
        <Link
          className="mx-3 mt-4 mr-10 text-lg hover:text-blue-900 px-2 py-1 font-bold h-1/2 text-Text"
          href={"./login"}
          id="Login"
        >
          Log In
        </Link>
        <Link
          className="mx-3 mt-4 mr-10 text-lg hover:text-blue-900 px-2 py-1 font-bold h-1/2 text-Text"
          href={"./signup"}
          id="Signup"
        >
          Sign Up
        </Link>
      </div>
      <main className="h-screen text-Text flex p-5 w-full items-center justify-center text-center">
        <div>
          <div id="Logo" className="flex justify-center items-center">
            <Image src={Bear} width={100} height={100} />
          </div>
          <h1 className="text-6xl font-bold tracking-widest my-10">
            Meddy is the future
          </h1>
          <h2 className="text-3xl font-medium tracking-wide my-10">
            A hypothetical one at least...
          </h2>
          <p className="text-3xl my-10">
            Meddy was created for{" "}
            <Link href="https://www.shellhacks.net/" target="_blank">
              <b>ShellHacks 2024</b>
            </Link>{" "}
            as a mock up for an all-in-one healthcare solution by
            <br />{" "}
            <Link href="https://github.com/Alitech3" target="_blank">
              <u>Ali Chapman</u>
            </Link>
            ,{" "}
            <Link href="https://github.com/myr124" target="_blank">
              <u>Eric George</u>
            </Link>
            ,{" "}
            <Link href="https://github.com/aidenletourneau" target="_blank">
              <u>Aiden Letourneau</u>
            </Link>
            , &{" "}
            <Link href="https://github.com/same-difference" target="_blank">
              <u>Dianneth Murillo</u>
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
