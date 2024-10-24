import Pokedex from "./components/Pokedex";

const Home = async () => {
  const LIMIT = 20;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`);
  const pokemons = await res.json();
  console.log(pokemons);

  return (
    <>
      <Pokedex pokemons={pokemons.results}></Pokedex>
    </>
  );
};

export default Home;
