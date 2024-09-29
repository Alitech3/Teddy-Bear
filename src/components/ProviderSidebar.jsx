import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const ProviderSidebar = () => {
  return (
    <div className="top-0 left-0 h-screen w-52 bg-Secondary text-white flex flex-col p-4 gap-4 font-bold pt-20">
      <Logo />
      <div>
        <Link href="/provider-view/my-patients">
          <h3 className="hover:text-gray-400 cursor-pointer">My Patients</h3>
        </Link>
      </div>
    </div>
  );
};

export default ProviderSidebar;
