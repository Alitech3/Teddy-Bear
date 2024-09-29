import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export default function Sitemap() {
  return (
    <>
      <div className="h-screen text-xl text-Text">
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
        <div className="flex place-items-center justify-center">
          <Card className="w-3/5 mx-auto my-6">
            <CardHeader>
              <CardTitle>Site Map</CardTitle>
            </CardHeader>
            <CardContent className="w-full flex flex-row gap-8 p-x-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>
                      <Link href={"/"}>Home</Link>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Link href={"/about"}>About</Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/contact"}>Contact</Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/login"}>Log In</Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/signup"}>Sign Up</Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/sitemap"}>Sitemap</Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/not-found"}>404 Not Found</Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>
                      <Link href={"/patient-view"}>Patient View</Link>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Link href={"/patient-view/find-a-provider"}>
                        Find a Provider
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link href={"/patient-view/medical-history"}>
                        Medical History
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>
                      <Link href={"/provider-view"}>Provider View</Link>
                    </TableCell>
                  </TableRow>
                </TableHeader>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
