// app/quiz/[subject]/page.js
"use client";
import React from "react";
import Quiz from "../../../components/Quiz";
import { physicsQuiz } from "../../../data/Physics";
import { chemistryQuiz } from "../../../data/chemistry";
import { mathsQuiz } from "../../../data/maths";

const quizMap = {
    physics: physicsQuiz,
    chemistry: chemistryQuiz,
    maths: mathsQuiz,
};

const QuizPage = ({ params }) => {
    const { subject } = params;
    const quiz = quizMap[subject];

    return ( <
        Quiz quiz = { quiz }
        name = { subject.charAt(0).toUpperCase() + subject.slice(1) }
        />
    );
};

export default QuizPage;