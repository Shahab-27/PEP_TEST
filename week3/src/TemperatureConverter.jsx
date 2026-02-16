import React, { useEffect, useState } from "react";
import './App.css'
function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastEdited, setLastEdited] = useState(null);

  useEffect(() => {
    if (lastEdited === "celsius" && celsius !== "") {
      const f = (celsius * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }

    if (lastEdited === "fahrenheit" && fahrenheit !== "") {
      const c = ((fahrenheit - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  }, [celsius, fahrenheit, lastEdited]);

  return (
    <>
      <h2>Temperature Converter</h2>

      <div>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => {
            setLastEdited("celsius");
            setCelsius(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => {
            setLastEdited("fahrenheit");
            setFahrenheit(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default TemperatureConverter;
