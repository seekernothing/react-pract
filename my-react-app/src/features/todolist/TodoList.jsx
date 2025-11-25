import React, { useState } from "react";

import { addTodo } from "./todoSlice";

import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [inp, setInp] = useState("");

  return (
    <div>
      <div>
        {/* for input */}
        <input
          type="text"
          placeholder="enter your task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />

        <button onClick={() => dispatch(addTodo(inp))}>Add</button>
      </div>

      <div>
        {/* for list  */}

        <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
