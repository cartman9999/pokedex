"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PokeList from "./PokeList";

const Pokedex = ({ pokemons }) => {
  const [orderedPokemons, setOrderedPokemons] = useState(pokemons);
  const searchParams = useSearchParams();
  const sortingValue = searchParams.get("sorting") ?? "-";

  useEffect(() => {
    const sortedPokemons = sortPokemons(pokemons, sortingValue);
    setOrderedPokemons(sortedPokemons);
  }, [sortingValue, pokemons]);

  const sortPokemons = (pokemons, sortingValue) => {
    if (sortingValue === "Descendentemente") {
      return pokemons.sort((a, b) => b.name.localeCompare(a.name));
    }

    return pokemons.sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <>
      <h1 class="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Pokemons
      </h1>

      <PokeList pokemons={orderedPokemons}></PokeList>
    </>
  );
};

export default Pokedex;
