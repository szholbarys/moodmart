import React from "react";
import Button from "../shared/Button";
import { SearchIcon } from "../shared/icons/searchIcon";

export const SearchArea: React.FC = () => {
    return (
        <div className="flex items-center border">
          <SearchIcon color="var(--grey)"/>
          <input
            className="w-[37rem]"
            placeholder="Например: пудра"
            />
          <Button type="primary" noArrow={false}>Найти</Button>
        </div>
    )
}