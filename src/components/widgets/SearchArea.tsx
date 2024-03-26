import React, { useState, useRef } from "react";
import Button from "../shared/Button";
import { SearchIcon } from "../shared/icons/searchIcon";
import useProductStore from "@/store/product";
import { useRouter } from "next/navigation";

export const SearchArea: React.FC = () => {
  const { products } = useProductStore();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
      // You can add more conditions for brand or any other fields
    );

    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center border">
      <SearchIcon color="var(--grey)" />
      <input
        ref={inputRef}
        className="xl:w-[37rem] sm:w-[30rem]"
        placeholder="Например: пудра"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button type="primary" noArrow={false} className="h-[150%]" onClick={handleSearch}>
        Найти
      </Button>
    </div>
  );
};
