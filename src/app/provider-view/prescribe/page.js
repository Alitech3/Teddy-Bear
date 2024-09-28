'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Terminal } from "lucide-react"
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import OpenAI from 'openai'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


const openai = new OpenAI({apiKey:"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", dangerouslyAllowBrowser:true})

const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o'
});

console.log(response.data.choices[0].message.content)

const page = () => {
    const [visible, setVisible] = useState(0)
    const [text, setText] = useState("")
    const clickHandler = ()=>{
        setVisible(100);
    }
    const resetAlert = ()=>{
        setVisible(0);
    }
  return (
    <div className='grid grid-rows-3'>
    <Alert className={"opacity-"+visible}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is a valid combination
      </AlertDescription>
    </Alert>
    <Button onClick={clickHandler}>Alert!</Button>
    <Input className = "" placeholder="Type in prescriptions"></Input>
    <div>{text}</div>
    </div>
    
  )
}

export default page