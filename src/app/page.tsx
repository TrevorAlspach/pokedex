import Search from "@/_custom_components/Search/Search";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center
    ">
    {/* Welcome Message */}
    <h1 className="text-4xl font-bold mb-4">Welcome to the Pokédex!</h1>
    
    {/* Search Bar */}
    {/* <input
      type="text"
      placeholder="Search Pokémon"
      className="p-2 border rounded-md w-64"
    /> */}
    <Search/>
  </div>
  );
}
