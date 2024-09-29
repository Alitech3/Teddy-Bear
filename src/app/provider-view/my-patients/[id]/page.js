"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import OpenAI from "openai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import ProviderLayout from "@/components/ProviderLayout";
import Patient from "../../../../../data/patients.json";
import { usePathname } from "next/navigation";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import prescriptions from "../../../../../data/prescriptions.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_AIKEY,
  dangerouslyAllowBrowser: true,
});

const Page = async () => {
  let id = usePathname().substring(27);
  const patient = await Patient.find({});
  const prescription = await prescriptions.find((x) => x.id === parseInt(id));
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const resetAlert = () => {
    setVisible(false);
  };

  const clickHandler = async () => {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: inputValue }],
      model: "gpt-4o",
    });

    const message = response.choices[0].message.content;
    setText(message);
    setVisible(true);
  };

  return (
    <>
      <ProviderLayout>
        <div className='flex flex-col gap-10 p-5'>
          <div class='flex items-center'>
            <img src={patient.image} width={120} height={120} sizes='fill' />
            <Label className=' p-6 text-white text-4xl'>
              <h6>
                {patients[id - 1].first_name + " " + patients[id - 1].last_name}
              </h6>
            </Label>
            <Label className=' p-3 text-white text-2xl flex justify-center'>
              Meddy.ai
            </Label>
          </div>
          <Input
            id='i1'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Ask me your health questions?'
            className='text-black'
          />
          <Button
            onClick={clickHandler}
            className='bg-blue-600 text-white hover:bg-blue-700'>
            Submit
          </Button>
          <div className='text-white text-lg font-semibold'>{text}</div>
          <div className='bg-white text-black'>
            <Table>
              <TableCaption>Medications that the patient is on</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Generic Name</TableHead>
                  <TableHead>Brand Name</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead className='text-right'>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescription.medications.map((medication, index) => (
                  <TableRow key={index}>
                    <TableCell className='font-medium'>
                      {medication.brand_name}
                    </TableCell>
                    <TableCell>{medication.generic_name}</TableCell>
                    <TableCell>{medication.dosage}</TableCell>
                    <TableCell className='text-right'>
                      {medication.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className='bg-white text-black'>
            <Table className=''>
              <TableCaption>Allergies</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Allergies</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patient.allergies.map((allergy, index) => (
                  <TableRow key={index}>
                    <TableCell className='font-medium'>{allergy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className='flex flex-col items-center justify-center space-y-4 p-6'>
            {visible && (
              <Alert
                onClose={resetAlert}
                className='transition-opacity duration-300'>
                <Terminal className='h-4 w-4' />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>This is a valid combination</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </ProviderLayout>
    </>
  );
};

export default Page;
