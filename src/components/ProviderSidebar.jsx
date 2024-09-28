import React from 'react'
import Link from "next/link"

const ProviderSidebar = () => {
  return (
    <div className="top-0 left-0 h-screen w-52 bg-Secondary text-white flex flex-col p-4 gap-4">
      <div>
        <Link href="/patient-view/my-medications">
          <h3 className="hover:text-gray-400 cursor-pointer">My Patients</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProviderSidebar
