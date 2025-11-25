import React from "react";
import weather from "../components/waether.json";
const Weather = () => {
  return (
    <div>
      <div>
        {/* to display weather */}

        {weather.map((W, idx) => (
          <div key={idx}>
            <p>
              <span
                style={
                  W.temperature > 20 ? { color: "red" } : { color: "blue" }
                }
              >
                <b> {W.temperature}</b>
              </span>{" "}
              -- <span>{W.conditions} </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
