"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import OpenAI from "openai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { DataTableDemo } from "@/components/Datatable";
import ProviderLayout from "@/components/ProviderLayout";
import patients from "../../../../../data/patients.json";
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
import Image from "next/image";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_AIKEY,
  dangerouslyAllowBrowser: true,
});

const Page = () => {
  console.log(patients[0].id);

  let id = usePathname().substring(27);
  console.log(id);
  const patient = patients.find((p) => p.id === parseInt(id));
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

  console.log(patient.image);

  return (
    <>
      <ProviderLayout>
        <div className="flex flex-col gap-10 p-5">
          <div class="flex items-center">
            <img src={patient.image} width={120} height={120} sizes="fill" />
            <Label className=" p-6 text-white text-4xl">
              <h6>
                {patients[id - 1].first_name + " " + patients[id - 1].last_name}
              </h6>
            </Label>
            <Label className=" p-3 text-white text-2xl flex justify-center">
              Meddy.ai
            </Label>
          </div>
          <Input
            id="i1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me your health questions?"
          />
          <Button
            onClick={clickHandler}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </Button>
          <div className="text-white text-lg font-semibold">{text}</div>
          <div className="bg-white text-black">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="bg-white text-black">
            <Table className="">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 p-6">
            {visible && (
              <Alert
                onClose={resetAlert}
                className="transition-opacity duration-300"
              >
                <Terminal className="h-4 w-4" />
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
