import React from "react";
import Delete from "./Delete";
function QuestionList({ questions, setQuestions }) {
  const question = questions.map((list) => {
    return (
      <li key={list.id}>
        <>{question.prompt}</>
        <Delete
          id={list.id}
          questions={questions}
          setQuestions={setQuestions}
        />
      </li>
    );
  });
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>{question}</ul>
    </section>
  );
}

export default QuestionList;
