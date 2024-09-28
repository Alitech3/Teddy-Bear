import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function PatientCard({patient, index}) {
  return (
    <Card className="w-full" key={index}>
      <CardTitle>{patient.first_name + " " + patient.last_name}</CardTitle>
      <CardContent className="flex flex-row">
        <img src={patient.image}></img>
        <CardDescription>{patient.treat_notes}</CardDescription>
      </CardContent>
    </Card>
  )
}
