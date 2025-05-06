// components/ScoreCard.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ScoreCard = ({ quizResult, questions, name }) => {
  const passPercentage = 50;
  const percentage = (quizResult.score / (questions.length * 5)) * 100;
  const status = percentage >= passPercentage ? "Pass" : "Fail";

  const router = useRouter();

  return (
    <div className="card p-4">
      <h3>Hello, {name}. Here is your Result Analysis</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Total Questions:</td>
            <td>{questions.length}</td>
          </tr>
          <tr>
            <td>Total Score:</td>
            <td>{quizResult.score}</td>
          </tr>
          <tr>
            <td>Correct Answers:</td>
            <td>{quizResult.correctAnswers}</td>
          </tr>
          <tr>
            <td>Wrong Answers:</td>
            <td>{quizResult.wrongAnswers}</td>
          </tr>
          <tr>
            <td>Percentage:</td>
            <td>{percentage.toFixed(2)}%</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => router.push("/")} className="btn btn-primary mt-3">
        Back to Home
      </button>
    </div>
  );
};

export default ScoreCard;
