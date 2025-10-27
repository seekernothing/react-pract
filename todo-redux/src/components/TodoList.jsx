import React from "react";
import { useState } from "react";
import { addTodo, deleteTodo, editTodo } from "../store/slice/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [currentEditedTodoId, setCurrentEditedTodoId] = useState(null);

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  console.log(todoList);

  //add todo
  function handelAddtodo() {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
    }

    setInput("");
  }

  // delete todo

  function handelDelete(id) {
    dispatch(deleteTodo(id));
  }

  // to get the being updated todo in in input

  function handelUpdateTodo(t) {
    //  dispatch(editTodo(id))

    setCurrentEditedTodoId(t.id);
    setInput(t.title);
  }

  // edit todo

  function handelEditTodo() {
    dispatch(
      editTodo({
        currentEditedTodoId,
        input,
      })
    );

    setInput("");
  }

  return (
    <div className="container">
      {/* input div */}

      <div className="innput">
        <input
          type="text"
          placeholder="Enter the task"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={
            currentEditedTodoId !== null ? handelEditTodo : handelAddtodo
          }
        >
          {currentEditedTodoId !== null ? "Edit " : "Add"}
        </button>
      </div>

      <div className="ul">
        {todoList && todoList.length > 0
          ? todoList.map((t) => (
              <li key={t.id}>
                <p>{t.title}</p>

                <button onClick={() => handelDelete(t.id)}>Delete</button>

                <button onClick={() => handelUpdateTodo(t)}>Edit</button>
              </li>
            ))
          : null}
      </div>
    </div>
  );
};
export default TodoList;
