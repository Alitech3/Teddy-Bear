import React from 'react'
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-Secondary text-white flex flex-col p-4 gap-4">
      <div>
        <Link href="your-medications">
          <h3 className="hover:text-gray-400 cursor-pointer">Your Medications</h3>
        </Link>
      </div>
      <div>
        <Link href="/medical-history">
          <h3 className="hover:text-gray-400 cursor-pointer">Medical History</h3>
        </Link>
      </div>
      <div>
        <Link href="/find-a-provider">
          <h3 className="hover:text-gray-400 cursor-pointer">Find a Provider</h3>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
