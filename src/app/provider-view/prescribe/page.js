'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import OpenAI from 'openai';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
});

const Page = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const resetAlert = () => {
    setVisible(false);
  };

  const clickHandler = async () => {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: inputValue }],
      model: 'gpt-4o',
    });
    
    const message = response.choices[0].message.content;
    setText(message);
    setVisible(true);
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-4 p-6'>
      {visible && (
        <Alert onClose={resetAlert} className="transition-opacity duration-300">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>This is a valid combination</AlertDescription>
        </Alert>
      )}
      <Input
        id="i1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Hello, what is your name?"
      />
      <Button onClick={clickHandler} className="bg-blue-600 text-white hover:bg-blue-700">
        Submit
      </Button>
      <div className="text-white text-lg font-semibold">{text}</div>
    </div>
  );
};

export default Page;