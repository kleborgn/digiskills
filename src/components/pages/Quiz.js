import React, { useState } from 'react';
import Start from '../Start';
import Question from '../Question';
import quizData from '../../data/quiz.json';
import End from '../End';
import Modal from '../Modal';
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  }
  return (
    <>
    <h1 className="quiz">Quiz</h1>
    <div className="App" >
      
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => { setShowModal(true)}}
      />}
      {showModal && <Modal 
      onClose={() => setShowModal(false)}
      results={answers}
      data={quizData.data}
      />}
    </div>
    </>
  );
}

export default App;