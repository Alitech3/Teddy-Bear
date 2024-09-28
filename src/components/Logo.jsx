import React from 'react'
import Image from 'next/image'
import LogoImg from '../../assets/home/Logo.png'

const Logo = () => {
  return (
    <div className='Branding flex flex-row items-center absolute top-4 left-20 transform -translate-x-1/2'>
      <Image
        src={LogoImg}
        width={50}
        height={50}/>
      <h1 style={{fontSize: "1.3em"}}>
        Meddy
      </h1>
    </div>
  )
}

export default Logo