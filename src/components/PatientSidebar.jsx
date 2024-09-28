import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from '../../assets/home/Logo.png'

const PatientSidebar = () => {
  return (
    
    <div className="bg-gradient-to-tl from-blue-300 via-cyan-400 to-blue-900 top-0 left-0 h-screen w-52 bg-Secondary text-white flex flex-col p-4 gap-4 backdrop-blur-lg font-bold pt-20">
      <div className='Branding flex flex-row items-center absolute top-4 left-20 transform -translate-x-1/2'>
          <Image
            src={Logo}
            width={50}
            height={50}/>
          <h1 style={{fontSize: "1.3em"}}>
            Meddy
          </h1>
        </div>
      <div>
        <Link href="/patient-view/my-medications">
          <h3 className="hover:text-gray-400 cursor-pointer">My Medications</h3>
        </Link>
      </div>
      <div>
        <Link href="/patient-view/medical-history">
          <h3 className="hover:text-gray-400 cursor-pointer">Medical History</h3>
        </Link>
      </div>
      <div>
        <Link href="/patient-view/find-a-provider">
          <h3 className="hover:text-gray-400 cursor-pointer">Find a Provider</h3>
        </Link>
      </div>
    </div>
  )
}

export default PatientSidebar
