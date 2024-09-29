import React from "react";
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

export function CardWithForm({
  Title,
  Description,
  onSubmit,
  onNameChange,
  onPasswordChange,
}) {
  return (
    <Card className='w-[350px] block'>
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
