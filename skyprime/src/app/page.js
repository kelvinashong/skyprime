'use client';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const api_key = '86d91dce9ea3018804e816d3ebe5c37b';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };



  return (
    <main className="mt-10 text-xs ">
      <div className="mt-10 ml-5">
        <input
          className="h-10 w-40 pl-2  border-b-2"
          label="city"
          type="text"
          value={location}
          placeholder="Enter name of city"
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="mt-1 ml-5 ">
        <button
          // onCick={handleSearch}
          className="border-2 p-2 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="border-4 border-black mt-10 w-3/4 h-96 ml-10 rounded-lg">
        <div className="text-center mt-12">
          {data.sys ? (
            <h1 className="font-mono">
              {data.name} - {data.sys.country}{' '}
            </h1>
          ) : null}

          <h1 className="mt-10">icon</h1>
          {data.main ? (
            <h1 className="mt-10 text-5xl font-mono">{data.main.temp.toFixed()}&deg;C</h1>
          ) : null}

          {data.weather ? (
            <h1 className="mt-10 mb-20 text-xs font-mono">
              {' '}
              We are having {' '}{data.weather[0].description} {' '} now
            </h1>
          ) : null}
        </div>
      </div>
    </main>
  );
}
