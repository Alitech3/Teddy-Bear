'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Terminal } from "lucide-react"
import { useState } from 'react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


const page = () => {
    const [visible, setVisible] = useState(0)
    const clickHandler = ()=>{
        setVisible(100);
    }
  return (
    <div>
    <Alert className={"opacity-"+visible}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is a valid combination
      </AlertDescription>
    </Alert>
    <Button onClick={clickHandler}>Alert!</Button>
    </div>
  )
}

export default page