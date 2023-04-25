import React, { useState } from "react";
import "./Todo.css";
import Todolst from "./Todolst";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const Listitm = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={itemEvent} />
          <button onClick={Listitm}>+</button>

          <ol>
            <li>{inputList}</li>
            {Items.map((itemval, index) => {
              return (
                <Todolst
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
