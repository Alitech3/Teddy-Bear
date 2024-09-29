import React from "react";
import Image from "next/image";
import LogoImg from "../../assets/home/Logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="z-10" href={"/"}>
      <div className="Branding flex flex-row items-center absolute top-4 left-20 transform -translate-x-1/2">
        <Image src={LogoImg} width={50} height={50} />
        <h1 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Meddy</h1>
      </div>
    </Link>
  );
};

export default Logo;
