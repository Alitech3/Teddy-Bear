import { Suspense } from "react";
import data from "../../../../data/patients.json";
import visitData from "../../../../data/visit_history.json";

import dynamic from "next/dynamic";
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

const PatientLayout = dynamic(() => import("@/components/PatientLayout"), {
  ssr: false,
});

export default function Home() {
  const patient = data[data.length - 1];
  const myVisits = visitData.slice(0, patient.visit_history);

  return (
    <Suspense fallback={<>Loading...</>}>
      <PatientLayout>
        <div className="grid grid-cols-2 gap-6 max-w-fit mx-auto pb-10">
          <div className="col-span-2">
            <PageTitle text={"Medical History"} />
          </div>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>
                {patient.first_name} {patient.last_name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row space-x-6">
              <div>
                <img src={patient.image} className="w-[200px]" />
              </div>
              <div>
                <Table>
                  <TableRow>
                    <TableHead>DOB</TableHead>
                    <TableCell>{patient.date_of_birth}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Sex</TableHead>
                    <TableCell>{patient.sex}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Height</TableHead>
                    <TableCell>{patient.height}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Weight</TableHead>
                    <TableCell>{patient.weight}</TableCell>
                  </TableRow>
                </Table>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableRow>
                  <TableHead>Phone Number</TableHead>
                  <TableCell>{patient.phone_number}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableCell>{patient.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Home Address</TableHead>
                  <TableCell>{patient.home_address}</TableCell>
                </TableRow>
              </Table>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Diagnoses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {patient.diagnoses.map((diagnosis, index) => (
                  <li className="pb-2 ml-2" key={index}>
                    {diagnosis}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Allergies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {patient.allergies.map((allergy, index) => (
                  <li className="pb-2 ml-2" key={index}>
                    {allergy}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Visits</CardTitle>
            </CardHeader>
            <CardContent>
              {myVisits.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableHead>Date</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableHeader>
                  {myVisits.map((visit, index) => (
                    <TableRow key={index}>
                      <TableCell>{visit.date}</TableCell>
                      <TableCell>
                        {visit.provider_first_name} {visit.provider_last_name}
                      </TableCell>
                      <TableCell>{visit.reason}</TableCell>
                    </TableRow>
                  ))}
                </Table>
              ) : (
                <CardDescription>
                  Make your first appointment today!
                </CardDescription>
              )}
            </CardContent>
          </Card>
        </div>
      </PatientLayout>
    </Suspense>
  );
}
