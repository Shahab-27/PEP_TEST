import React, { useEffect, useRef, useState } from "react";

function FocusTracker() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);
  const historyRef = useRef([]);

  useEffect(() => {
    console.log("Focus count updated:", count);
  }, [count]);

  const handleFocus = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (!input) return;

    setMessages((prev) => [...prev, input]); 
    historyRef.current.push(input); 

    setInput("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div>Focus Tracker & Message History</div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={handleFocus}
      />

      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <h3>Focus Count : {count}</h3>

      <h3>Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}> {msg}</li>
        ))}
      </ul>

      <h3>History in Ref (no re-render):</h3>
      <p>{historyRef.current.join(", ")}</p>
    </>
  );
}

export default FocusTracker;
