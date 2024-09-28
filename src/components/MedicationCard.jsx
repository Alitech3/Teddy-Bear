import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function MedicationCard({medication, index}) {
  return (
    <Card className="h-32 w-full" key={index}>
      <CardTitle className="p-3">{medication.brand_name}</CardTitle>
      <CardContent className="flex flex-row gap-4 h-24">
        <img src={medication.image}></img>
        <CardDescription className=" overflow-auto">{medication.dosage}</CardDescription>
      </CardContent>
    </Card>
  )
}
