import React, { useState } from "react";

const ToggleList = ({ items }) => {
  const [list, setList] = useState(Array(items.length).fill(false));

  const handelToggle = (id) => {
    const open = [...list];
    open[id] = !open[id]
    setList(open)
  };
  return (
    <div>
      <ul className="ul">
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name}
            <button onClick={() => handelToggle(idx)}>Toggle</button>
            <div>
                {list[idx]&&
                <h2>
                    {item.description}
                </h2>
                }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleList;
