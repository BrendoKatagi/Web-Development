import React, { useState } from "react";
import InputArea from "./InputArea";
import ListItem from "./ListItem";

function App() {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    setItem((prevValue) => {
      return [...prevValue, newItem];
    });
    setNewItem("");
  }

  function updateNewItem(event) {
    const { value } = event.target;
    setNewItem(value);
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        newItem={newItem}
        addItem={addItem}
        updateNewItem={updateNewItem}
      />
      <div>
        <ul>
          {item.map((i, index) => {
            return (
              <ListItem
                key={index}
                id={index}
                value={i}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
