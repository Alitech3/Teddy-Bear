import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PatientCard({ patient, index }) {
  console.log(patient);
  return (
    <Card className='h-32 ml-5 mr-5' key={index}>
      <CardTitle className='p-3'>
        {patient.first_name + " " + patient.last_name}
      </CardTitle>
      <CardContent className='flex flex-row gap-4 h-24'>
        <img src={patient.image}></img>
        <CardDescription className=' overflow-auto'>
          {patient.treat_notes}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
