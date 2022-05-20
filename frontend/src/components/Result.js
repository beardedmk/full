import React from "react";
import { appContext } from "../context/Context";
import { useContext } from "react";
import "./Style.css";

export default function Result() {
  const { score, name, setState } = useContext(appContext);
  return (
    <div className="result">
      {score > 1 ? (
        <h2 style={{ color: "white" }}>
          <span>{name}!</span> You perform excellently well
        </h2>
      ) : (
        <>
          <h1>{name}! Give one more chance</h1>
          <button
            type="submit"
            onClick={() => {
              setState("question");
            }}
          >
            Retry
          </button>
        </>
      )}
      <p>
        Your score is <span>{score}</span>
      </p>
    </div>
  );
}
