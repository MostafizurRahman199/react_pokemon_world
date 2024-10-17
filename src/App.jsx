import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);


  try {
    
  const fetchData = async () => {
    setLoading(true);
    const API = `https://pokeapi.co/api/v2/pokemon?limit=124`;
    let data = await fetch(API);
    data = await data.json();
    data = data.results;

    let newDataObj = data.map(async (item) => {
      let urlObj = await fetch(item.url);
      urlObj = await urlObj.json();
      return urlObj;
    });

    const detailsResponse = await Promise.all(newDataObj);
    setPokemon(detailsResponse);
    setLoading(false);
  };



  useEffect(() => {
    fetchData();
  }, []);
  
  } catch (error) {
    console.log(error.message);
  }

  return <>
 <div className="w-11/12 mx-auto">

   


  {loading ? (
    <div className="h-screen flex justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  ) : (
    
    pokemon.length > 0 && <Pokemon pokemon={pokemon} />
  )}
</div>

   
   </>

}

export default App;
