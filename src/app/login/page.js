"use client";
import Footer from "@/components/Footer";
import { CardWithForm } from "@/components/ui/cardwithform";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `/api/login?name=${name}&password=${password}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.userType === "patient") {
        router.push("/patient-view");
      } else if (data.userType === "provider") {
        router.push("/provider-view");
      }
    } else {
      console.log("Login failed");
    }
  };

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <CardWithForm
          Title='Login'
          Description='Meddys got you :)'
          onSubmit={handleLoginSubmit}
          onNameChange={(e) => setName(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Footer />
    </>
  );
}
