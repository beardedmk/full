import React from "react";
import { appContext } from "../context/Context";
import { useContext } from "react";
import { Questions } from "./Questions";
import { useState } from "react";
import "./Style.css";

export default function QuestionView() {
  const [currentQue, setCurrentQue] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");

  const { score, setScore, setState } = useContext(appContext);

  const selectedOption = (e) => {
    setOptionSelected(e);
  };

  const onNext = () => {
    if (optionSelected === Questions[currentQue].answer) {
      setScore(score + 1);
    }
    setCurrentQue(currentQue + 1);
  };

  const onEnd = () => {
    if (optionSelected === Questions[currentQue].answer) {
      setScore(score + 1);
    }
    setState("result");
  };

  return (
    <>
      <div className="question">
        <h2>{Questions[currentQue].prompt}</h2>
        <div className="optionsBtn">
          <button
            onClick={() => {
              selectedOption("optionA");
            }}
            className="options"
          >
            {Questions[currentQue].optionA}
          </button>
          <button
            onClick={() => {
              selectedOption("optionB");
            }}
            className="options"
          >
            {Questions[currentQue].optionB}
          </button>
          <button
            onClick={() => {
              selectedOption("optionC");
            }}
            className="options"
          >
            {Questions[currentQue].optionC}
          </button>
          <button
            onClick={() => {
              selectedOption("optionD");
            }}
            className="options"
          >
            {Questions[currentQue].optionD}
          </button>
        </div>
      </div>
      <div>
        {currentQue !== Questions.length - 1 ? (
          <button type="submit" className="nxtBtn" onClick={onNext}>
            Next Question
          </button>
        ) : (
          <button type="submit" className="nxtBtn" onClick={onEnd}>
            End Quiz
          </button>
        )}
      </div>
    </>
  );
}
