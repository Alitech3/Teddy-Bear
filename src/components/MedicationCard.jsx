import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MedicationCard({ medication, index }) {
  return (
    /*
    {
        "brand_name": "Zetia",
        "generic_name": "ezetimibe",
        "dosage": "10 mg",
        "price": "$30.00",
        "form_of_ingestion": "pill"
      },
      */
    <Card className="h-fit w-full" key={index}>
      <CardHeader>
        <CardTitle>{medication.brand_name}</CardTitle>
        <CardDescription>
          {medication.generic_name} - {medication.dosage}{" "}
          {medication.form_of_ingestion}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <CardDescription>{medication.price}</CardDescription>
      </CardFooter>
    </Card>
  );
}
