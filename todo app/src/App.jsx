import React, { useState } from "react";

const App = () => {
  const [inp, setInp] = useState("");
  const [todos, settodos] = useState([]);

  const handelAdd = (inp) => {
    const data = {
      id: Date.now(),
      text: inp,
    };
    settodos([...todos, data]);
    setInp("");
  };

  const handelDlt = (id) => {
    let newList = todos.filter((t) => t.id !== id);
    settodos(newList);
  };

  return (
    <div className="container" style={{textAlign:"center"}}>
      <div>
        {/* div to take inputs */}
        <input
          type="text"
          placeholder="Enter your task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />

        <button onClick={() => handelAdd(inp)}>Add</button>
      </div>

      <div>
        {/* div to display todos */}
        <ul style={{listStyleType:"none"}}>
          {todos.map((t) => (
            <li key={t.id}>
              {t.text}
              <span>
                <button onClick={() => handelDlt(t.id)}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
