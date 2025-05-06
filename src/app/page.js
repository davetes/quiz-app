// app/page.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleSubjectClick = (subject) => {
    router.push(`/quiz/${subject}`);
  };

  const subjects = [
    { name: "Physics", color: "bg-primary" },
    { name: "Chemistry", color: "bg-success" },
    { name: "Maths", color: "bg-danger" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className={`d-flex flex-column justify-content-center align-items-center rounded text-white p-5 ${subject.color}`}
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            onClick={() => handleSubjectClick(subject.name.toLowerCase())}
          >
            {subject.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
