"use client";
import { useState } from 'react';

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`;
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
 


  const handleChange = (event)=>{
      setQuery(event.target.value)
  }
   

  const handleSearch=(event) =>{
    fetch(`${url}`)
    .then((res) => res.json())
    .then(result => {
         setQuery('');
         setWeather(result);
         console.log(result);

        })
      }
          
  return (
    <main className="mt-10 text-xs ">
      <div className="mt-10 ml-5">
        <input
          className="h-10 w-40 pl-2  border-b-2"
          label="city"
          type='text'
          value={query}
          placeholder="Enter name of city"
          onChange={event => {handleChange(event)}}
          onKeyPress={event => {if(event.key === 'Enter'){handleSearch(event)}}}
        />
      </div>
      <div className="mt-1 ml-5 ">
        <button 
        onCick={handleSearch} 
        className="border-2 p-2 rounded-lg">
          Search
        </button>
        
      </div>
    </main>
  );
}
