import React, { useEffect, useState } from "react";

function Catfact() {
  const [fact, setFact] = useState("");
 

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (


    <div>
        <h4>Random Cat Fact Generator</h4>
        <p>{fact}</p>
      <button onClick={fetchCatFact}>Get New Fact</button>
    </div>
    
  );
}

export default Catfact;
