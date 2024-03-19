"use client"
import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    permanentRedirect("/home");
  }, []);

  return null;
}
