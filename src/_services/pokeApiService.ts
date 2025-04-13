import {
  Generation,
  NamedAPIResourceList,
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

    /*     const generations = response.results.map(
      (gen) => ({
        id: gen.name,
        url: gen.url,
        name: gen.name,
      })
    ); */

    return generationDetails; // Return the modified generations
  } catch (error) {
    console.error("Failed to fetch generations", error);
    return [];
  }
}
