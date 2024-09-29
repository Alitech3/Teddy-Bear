"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Icon, Mail, LogOut } from "lucide-react";

const PatientSidebar = () => {
  return (
    <div className="z-1 top-0 left-0 h-screen w-52 bg-Secondary text-white flex flex-col p-4 gap-4 backdrop-blur-lg font-bold pt-20">
      <Logo />
      <div>
        <Link href="/patient-view/my-medications">
          <h3 className="hover:text-gray-400 cursor-pointer">My Medications</h3>
        </Link>
      </div>
      <div>
        <Link href="/patient-view/medical-history">
          <h3 className="hover:text-gray-400 cursor-pointer">
            Medical History
          </h3>
        </Link>
      </div>
      <div>
        <Link href="/patient-view/find-a-provider">
          <h3 className="hover:text-gray-400 cursor-pointer">
            Find a Provider
          </h3>
        </Link>
      </div>
      <div className="flex flex-col h-full justify-end">
        <div class="flex justify-evenly">
          <LogOut
            onClick={() => {
              null;
            }}
          />
          <Mail className="flex" />
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;
