import React, { useState } from "react";

const Weatherapi = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const getData = async (city) => {
    try {
      const cityName = city.toLowerCase();

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e4efc6d546c3b5582abe50639f9927ee&units=metric`
      );

      const dataRes = await res.json();
      console.log("api data",dataRes);
      
      setData(dataRes);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => getData(input)}>Submit</button>

      {data && data.main ? (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      ) : null}
    </div>
  );
};

export default Weatherapi;
