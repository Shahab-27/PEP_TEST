import React, { useEffect, useState } from "react";

function Typing() {

  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(50);

  useEffect(() => {
    setRemaining(50 - text.length);
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 50) {
      setText(value);
    }
  };

  return (
    <>
      <h2>Live Character Counter</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
      />

      <h3>Characters: {text.length}</h3>
      <h3>Remaining: {remaining}</h3>

      {remaining <= 10 && (
        <p style={{ color: "red" }}>
         Warning: Only {remaining} characters left!
        </p>
      )}
    </>
  );
}

export default Typing;
