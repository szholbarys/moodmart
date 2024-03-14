"use client"
import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    permanentRedirect("/home");
  }, []);

  return null;
}
