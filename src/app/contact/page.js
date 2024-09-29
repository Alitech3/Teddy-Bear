import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="h-screen">
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
          <Card className="h-fit my-6 py-4">
            <CardHeader>
              <CardTitle>Phone Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableRow>
                  <TableHead>Medical Emergency</TableHead>
                  <TableCell>911</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Suicide and Crisis Line</TableHead>
                  <TableCell>988</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Poison Control Center</TableHead>
                  <TableCell>1-800-222-1222</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>
                    Substance Abuse and Mental Health Services Helpline
                  </TableHead>
                  <TableCell>1-800-662-4357</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>
                    Center For Disease Control and Prevention
                  </TableHead>
                  <TableCell>1-800-232-4636</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Medicare Helpline</TableHead>
                  <TableCell>1-800-633-4227</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Health Insurance Marketplace</TableHead>
                  <TableCell>1-800-318-2596</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Planned Parenthood</TableHead>
                  <TableCell>1-800-230-7526</TableCell>
                </TableRow>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
