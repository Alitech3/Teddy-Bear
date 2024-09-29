import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PatientCard({ patient, link }) {
  return (
    <Card className="h-full" key={patient.index}>
      <CardHeader>
        <CardTitle>{patient.first_name + " " + patient.last_name}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-3 min-w-fit">
        <img className="col-span-1 place-self-center" src={patient.image} />
        <Table className="col-span-1 w-full table-auto">
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
        <CardDescription className="col-span-2">
          {patient.treat_notes.split("\n").map((note, index) => (
            <span key={index}>
              {note}
              <br />
            </span>
          ))}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link className="w-1/2 mx-auto" href={link}>
            details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
