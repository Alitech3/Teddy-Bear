"use client";
import Footer from "@/components/Footer";
import { CardWithForm } from "@/components/ui/cardwithform";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);

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
      setFailed(true);
    }
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        {failed && (
          <div className="rounded-md bg-red-500 m-3 p-4">Login Failed</div>
        )}
        <CardWithForm
          enabled={false}
          Title="Login"
          Display="Log In"
          Description="Meddy's got you :)"
          onSubmit={handleLoginSubmit}
          onNameChange={(e) => setName(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Footer />
    </>
  );
}
