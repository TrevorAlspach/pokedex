import {
  Generation,
  NamedAPIResourceList,
  Pokedex,
  Pokemon,
  PokemonClient,
} from "pokenode-ts"; // Import the Client
import { GameClient } from "pokenode-ts";
const pokemonApi = new PokemonClient();
const gameClient = new GameClient();

export function getPokemonByName(name: string): Promise<Pokemon> {
  return pokemonApi.getPokemonByName(name); // Get the Pokemon by name
}

// export function listGenerations(): Promise<NamedAPIResourceList> {
//   return gameClient.listGenerations(); // List all generations
// }

export async function listGenerations() {
  try {
    const response = await gameClient.listGenerations();
    console.log(response);

    const generationDetails = await Promise.all(
      response.results.map(async (gen) => {
        const generationDetail: Generation =
          await gameClient.getGenerationByName(gen.name);
        return generationDetail;
      })
    );

    return generationDetails; // Return the modified generations
  } catch (error) {
    console.error("Failed to fetch generations", error);
    return [];
  }
}

export async function listPokedexes() {
  try {
    const response = await gameClient.listPokedexes();
    console.log(response);

    const pokedexDetails = await Promise.all(
      response.results.map(async (pokedex) => {
        const pokedexDetail: Pokedex = await gameClient.getPokedexByName(
          pokedex.name
        );
        return pokedexDetail;
      })
    );

    return pokedexDetails; // Return the modified generations
  } catch (error) {
    console.error("Failed to fetch generations", error);
    return [];
  }
}

export async function getNationalDex() {
  try {
    const response = await gameClient.getPokedexById(1);
    console.log(response);

    return response; // Return the modified generations
  } catch (error) {
    console.error("Failed to fetch generations", error);
    return [];
  }
}
