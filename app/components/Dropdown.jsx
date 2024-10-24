"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Dropdown = ({ sortingOption }) => {
  const router = useRouter();
  const options = ["Ascendentemente", "Descendentemente"];
  const [sortingValue, setSortingValue] = useState(sortingOption);
  console.log("Selected value: ", sortingValue);

  const handleSorting = (event) => {
    setSortingValue(event.target.value);

    router.push(`/?sorting=${event.target.value}`);
  };

  return (
    <>
      <label className="text-lg font-extrabold dark:text-white">
        {" "}
        Sorting:
        <select value={sortingValue} onChange={handleSorting} className="my-4">
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Dropdown;
