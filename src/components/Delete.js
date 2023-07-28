import React from "react";

function Delete({ id, questions, setQuestions }) {
  function handleDelete(e) {
    const id = parseInt(e.target.id);
    const newQuestions = questions.filter((question) => {
      return question.id !== id;
    });
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setQuestions(newQuestions);
  }
  return (
    <button onClick={handleDelete} id={id}>
      Delete
    </button>
  );
}
export default Delete;
