import Link from "next/link";

export default function Home() {
    return(
        <>
        <h1>Teddy Bear is the future.</h1>
        <h2>A hypothetical one at least.</h2>

        <p>Teddy Bear was created for <Link href="https://www.shellhacks.net/" target="_blank">ShellHacks 2024</Link> as a mock up for an all-in-one healthcare solution by <Link href="https://github.com/Alitech3" target="_blank">Ali Chapman</Link>, <Link href="https://github.com/myr124" target="_blank">Eric George</Link>, <Link href="https://github.com/aidenletourneau" target="_blank">Aiden Letourneau</Link>, and <Link href="https://github.com/same-difference" target="_blank">Dianneth Murillo</Link>.</p>
        </>
    )
}