import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(e) => {
          props.updateNewItem(e);
        }}
        type="text"
        value={props.newItem}
      />
      <button
        onClick={() => {
          props.addItem();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
