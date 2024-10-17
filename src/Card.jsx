import React from 'react'
import './App.css'

export default function Card({pokemon}) {

    const {name, id, weight, order, height, base_experience} = pokemon;
    const img = pokemon.sprites.other.dream_world.front_default;

    const types = pokemon.types.map((type)=>type);
    const newTypesArray = types.map((item)=>item.type.name);
    // console.log(Array.isArray(newTypesArray));

 
    // console.log(img);
    // console.log(pokemon);
  return (
    <div className="card bg-base-100 sm:w-full md:w-6/6  rounded-lg shadow-lg font_3">
    <figure className=''>
      <img className='w-3/6'
        src={img}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title items-center flex justify-center items-center">
        {name.toUpperCase()}
      </h2>
    <div className='flex gap-4 justify-center items-center'>
    {
          newTypesArray.map((name)=> (

            <div className="badge bg-green-500 text-white px-4 py-3">{name}</div>

          ))
        }
    </div>
      <p></p>
      <div className="card-actions justify-center">
        <div className="badge badge-outline">Experience : {base_experience}</div>
        <div className="badge badge-outline">Height : {height}</div>
        <div className="badge badge-outline">Weight : {weight}</div>
        <div className="badge badge-outline">Order : {order}</div>

      </div>
    </div>
  </div>
  )
}
