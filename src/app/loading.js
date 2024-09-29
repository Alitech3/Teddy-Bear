import Image from 'next/image';

import BearHat from '../../assets/home/HatBear.png';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex w-screen h-screen opacity-20'>
      <Image src={BearHat} fill={true} objectFit='contain'/>
    </div>
  );
}

// function SuspenseSimulator({ suspense = false }) {
//     if (suspense) {
//       throw new Promise(() => undefined);
//     } else {
//       return null
//     }
//   }
//   <SuspenseSimulator suspense={true}/>
  