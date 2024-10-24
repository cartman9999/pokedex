import React from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";

const PokeList = ({ pokemons }) => {
  const getImage = (pokemonUrl) => {
    const imgBaseUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    const extension = ".svg";
    const pokemonStrings = pokemonUrl.split("/");
    const pokemonId = pokemonStrings[pokemonStrings.length - 2];

    console.log(pokemonId);
    return `${imgBaseUrl}${pokemonId}${extension}`;
  };

  return (
    <>
      <Dropdown sortingOption="Ascendentemente" />
      <div class="grid grid-cols-4 gap-2">
        {pokemons.map((pokemon) => (
          <Card name={pokemon.name} image={getImage(pokemon.url)} />
        ))}
      </div>
    </>
  );
};

export default PokeList;
