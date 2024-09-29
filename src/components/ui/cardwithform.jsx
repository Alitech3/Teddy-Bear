import React, { useState } from "react";
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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm({
  Title,
  Description,
  onSubmit,
  onNameChange,
  onPasswordChange,
  onTypeChange = () => {}, // Default function if not provided
}) {
  const [type, setType] = useState("");

  const handleTypeChange = (value) => {
    setType(value); // Update the local state
    onTypeChange(value); // Call the provided function if available
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Username</Label>
              <Input
                id='name'
                placeholder='Username'
                onChange={onNameChange}
                required
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                placeholder='Password'
                type='password'
                onChange={onPasswordChange}
                required
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='type'>Account Type</Label>
              <Select onValueChange={handleTypeChange} value={type}>
                <SelectTrigger>
                  <SelectValue placeholder='Select account type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='patient'>Patient</SelectItem>
                  <SelectItem value='provider'>Provider</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className='flex justify-between mt-4'>
            <Button variant='outline' type='button' href='/'>
              Cancel
            </Button>
            <Button type='submit'>{Title}</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
