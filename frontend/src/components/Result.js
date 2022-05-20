import React from "react";
import { appContext } from "../context/Context";
import { useContext } from "react";
import "./Style.css";

export default function Result() {
  const { score, setScore, name, setState } = useContext(appContext);
  return (
    <div className="result">
      {score > 1 ? (
        <h4 style={{ color: "white" }}>
          <span>{name}!</span> You perform well in quiz
        </h4>
      ) : (
        <>
          <h1>{name}! Give one more chance</h1>
          <button
            type="submit"
            onClick={() => {
              setScore(0);
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
