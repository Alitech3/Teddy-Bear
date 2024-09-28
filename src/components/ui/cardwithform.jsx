import * as React from "react"
import { useState } from "react"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

//Todo:
// drop down to distinguish between provider and paitent or we need sample data that is linked to each case to showcase

export function CardWithForm({router}) {
  const [un, setUN] = useState('');
  const [pw, setPW] = useState('');

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Create your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="name" placeholder="Username" onChange={e=> setUN(e)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="pasw" placeholder="Password" onChange={e => setPW(e)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => {
          router.push('/patient-view');
      }}>Sign-Up</Button>
      </CardFooter>
    </Card>
  )
}
