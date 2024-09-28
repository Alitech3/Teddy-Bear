import * as React from 'react';
import { useState } from 'react';

import {Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

//Todo:
// drop down to distinguish between provider and paitent or we need sample data that is linked to each case to showcase

export function CardWithForm({router, Title = 'Sign-Up', Description = 'Create an account', input1='Username',input2='Password', button1 = 'Cancel', button2 = 'Sign-Up'}) {
  const [un, setUN] = useState('');
  const [pw, setPW] = useState('');

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="label1">Username</Label>
              <Input id="inp1" placeholder={input1}onChange={e=> setUN(e)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="label2">Password</Label>
              <Input id="inp2" placeholder={input2} onChange={e => setPW(e)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => {
          router.back();
        }}>Cancel</Button>
        <Button onClick={() => {
          router.push('/patient-view');
        }}>{Title}</Button>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
              <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              <SelectItem value="west">
            Western European Summer Time (WEST)
              </SelectItem>
              <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
              <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
              <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Australia & Pacific</SelectLabel>
              <SelectItem value="awst">
            Australian Western Standard Time (AWST)
              </SelectItem>
              <SelectItem value="acst">
            Australian Central Standard Time (ACST)
              </SelectItem>
              <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
              </SelectItem>
              <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
              <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>South America</SelectLabel>
              <SelectItem value="art">Argentina Time (ART)</SelectItem>
              <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
              <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
              <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  );
}
