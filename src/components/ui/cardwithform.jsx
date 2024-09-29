import * as React from "react";
import { useState } from "react";

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//Todo:
// drop down to distinguish between provider and paitent or we need sample data that is linked to each case to showcase

export function CardWithForm({
  router,
  Title = "Sign-Up",
  Description = "Create an account",
  input1 = "Username",
  input2 = "Password",
  button1 = "Cancel",
  button2 = "Sign-Up",
}) {
  const [un, setUN] = useState("");
  const [pw, setPW] = useState("");

  return (
    <Card className="w-[350px] block">
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
      <Select>
        <Label className="ml-6">Sign in as:</Label>
        <SelectTrigger className="w-5/6 mx-6 mb-4">
          <SelectValue placeholder="Account Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="patient">Patient</SelectItem>
          <SelectItem value="provider">Provider</SelectItem>
        </SelectContent>
      </Select>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="label1">Username</Label>
              <Input
                id="inp1"
                placeholder={input1}
                onChange={(e) => setUN(e)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="label2">Password</Label>
              <Input
                id="inp2"
                placeholder={input2}
                type="password"
                onChange={(e) => setPW(e)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            router.back();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            router.push("/patient-view");
          }}
        >
          {Title}
        </Button>
      </CardFooter>
    </Card>
  );
}
