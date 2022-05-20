import React from "react";
import { appContext } from "../context/Context";
import { useContext } from "react";
import "./Style.css";

export default function StartMenu() {
  const { name, setState, setName } = useContext(appContext);
  const start = () => {
    {
      name ? setState("question") : alert("please enter name");
    }
  };
  return (
    <div className="start">
      <h1>Welcome to QuizApp</h1>
      <p>test your learning here</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" onClick={start}>
        Start
      </button>
    </div>
  );
}
