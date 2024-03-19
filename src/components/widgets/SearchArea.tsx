"use client"
import React, { useState } from "react";
import Button from "../shared/Button";
import { SearchIcon } from "../shared/icons/searchIcon";
import useProductStore from "@/store/product";
import { useRouter } from "next/navigation";

export const SearchArea: React.FC = () => {
  const { products } = useProductStore();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState(products);
  const router = useRouter();

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
        // You can add more conditions for brand or any other fields you want to search by
    );
    setSearchResults(filteredProducts);
    router.push(`/search?${encodeURIComponent(searchQuery)}`);
    // console.log(searchResults);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
};
  return (
      <div className="flex items-center border">
        <SearchIcon color="var(--grey)"/>
        <input
          className="xl:w-[37rem] sm:w-[30rem]"
          placeholder="Например: пудра"
          value={searchQuery}
          onChange={handleChange}
          />
        <Button type="primary" noArrow={false} className="h-[150%]" onClick={handleSearch}>Найти</Button>
      </div>
  )
}