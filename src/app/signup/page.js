"use client";
import Footer from "@/components/Footer";
import { CardWithForm } from "@/components/ui/cardwithform";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  // Handle form submission
  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, type }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.userType === "patient") {
        router.push("/patient-view");
      } else if (data.userType === "provider") {
        router.push("/provider-view");
      }
    } else {
      console.log("Signup failed");
      // Optionally, display a message to the user
    }
  };

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <CardWithForm
          Title='Sign-Up'
          Description='Create your account'
          onSubmit={handleSignupSubmit}
          onNameChange={(e) => setName(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onTypeChange={setType}
        />
      </div>
      <Footer />
    </>
  );
}
