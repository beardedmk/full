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
        <div className="container">
          {state === "start" && <StartMenu />}
          {state === "question" && <QuestionView />}
          {state === "result" && <Result />}
        </div>
      </appContext.Provider>
    </>
  );
}
