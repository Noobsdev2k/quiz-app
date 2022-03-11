import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Questions from "./components/Questions";
function App() {
  const [question, setQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [endpoint, setEndpoint] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://opentdb.com/api.php?amount=20&category=21&difficulty=hard&type=multiple"
      );
      return res;
    }
    getData().then((res) => {
      setQuestion(res.data.results);
    });
    getData().catch((err) => {
      console.log(err);
    });
  }, []);
  const handleAnswer = (answer) => {
    const newAnswer = currentQuestion + 1;
    setCurrentQuestion(newAnswer);
    if (answer === question[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (newAnswer >= question.length) {
      setEndpoint(true);
    }
  };
  return (
    <div className="App">
      <div className="container">
      {endpoint ? (
        <h2 className="text-center">Your score was {score}!</h2>
      ) : question.length > 0 ? (
        
          <Questions
            question={question[currentQuestion]}
            handleAnswer={handleAnswer}
          />
       
      ) : (
        <div className="text-center">Loading...</div>
      )}
       </div>
    </div>
  );
}

export default App;
