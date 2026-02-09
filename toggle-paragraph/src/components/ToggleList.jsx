import React, { useState } from "react";

const ToggleList = ({ items }) => {
  const [open, setOpen] = useState(null);

  const handelToggle = (id) => {
    setOpen(open === id ? null : id);
  };
  return (
    <div>
      <h2>ToggleList</h2>

      <div>
        {/* div to display toggle list */}
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <button onClick={() => handelToggle(it.id)}>{it.name}</button>
              {open === it.id && <p>{it.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToggleList;
