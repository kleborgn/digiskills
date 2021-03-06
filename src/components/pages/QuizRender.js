import React, { useState } from 'react';
import Start from '../Quiz/Start';
import Question from '../Quiz/Question';
import End from '../Quiz/End';
import Modal from '../Quiz/Modal';
const QuizRender = (quizData, quizid) => {

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
            <h1 className="quiz">Test your skills</h1>
            <div className="App" >

                {step === 1 && <Start onQuizStart={quizStartHandler} />}
                {step === 2 && <Question
                    data={quizData.quizData.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.quizData.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />}
                {step === 3 && <End
                    results={answers}
                    data={quizData.quizData.data}
                    quizid={quizData.quizid}
                    onReset={resetClickHandler}
                    onAnswersCheck={() => { setShowModal(true)}}
                />}
                {showModal && <Modal
                    onClose={() => setShowModal(false)}
                    results={answers}
                    data={quizData.quizData.data}
                />}
            </div>
        </>

    );

}

export default QuizRender;