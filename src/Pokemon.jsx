import React, { useState } from "react";
import Card from "./Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function Pokemon({pokemon}) {


  const[search, setSearch] = useState("");

  const searchValue = pokemon.filter((data)=> {
    return data.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="flex flex-col items-center mx-auto sm:px-4 md:px-12 lg:px-20">

<div className="w-full flex flex-col z-50  items-center fixed bg-white py-4">
        <h1 className="text-4xl font-bold">Pokemon World!</h1>
            <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
            >
                <TextField name="search" onChange={(event)=>setSearch(event.target.value)} id="standard-basic" label="Search" variant="standard" />
            </Box>
      </div>
      
   <div className="grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-12 justify-items-center  mt-40">
       {
        searchValue.map((item, index) =>(
            <Card key={index} pokemon={item} />
        ))
       }
        
      </div>
    </div>
  );
}
