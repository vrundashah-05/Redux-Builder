import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { myAction } from "./Action";
import "./Input.css";

export default function Input() {
  const [state, setState] = useState({
    username: ""
  });

  const dispatch = useDispatch();

  function handleText(e) {
    setState({ username: e.target.value });
  }

  function handleSubmit() {
    if (state.username.trim() !== "") {
      dispatch(myAction(state));
      setState({ username: "" });
    }
  }

  return (
    <div className="input-container">
      <h3>Add User</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={state.username}
        onChange={handleText}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
