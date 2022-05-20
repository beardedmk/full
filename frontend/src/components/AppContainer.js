import React from "react";
import StartMenu from "./StartMenu";
import QuestionView from "./QuestionView";
import Result from "./Result";
import { useState } from "react";
import { appContext } from "../context/Context";

export default function AppContainer() {
  const [state, setState] = useState("start");
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const containerStyle = {
    backgroundColor: "blueviolet",
    maxWidth: "800px",
    minHeight: "450px",
    borderRadius: "20px",
    textAlign: "center",
    marginLeft: "18%",
  };
  return (
    <>
      <appContext.Provider
        value={{
          score,
          setScore,
          state,
          setState,
          name,
          setName,
        }}
      >
        <div className="container" style={containerStyle}>
          {state === "start" && <StartMenu />}
          {state === "question" && <QuestionView />}
          {state === "result" && <Result />}
        </div>
      </appContext.Provider>
    </>
  );
}
