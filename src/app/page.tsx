"use client"
import useProductStore from "@/store/product";
import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
    permanentRedirect("/home");
  }, []);

  return null;
}
