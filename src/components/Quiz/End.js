import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import QuizService from '../../services/quiz.service';
import AuthService from "../../services/auth.service";
const End = ({ results, data, onReset, onAnswersCheck, quizid }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
        let user = AuthService.getCurrentUser();
        console.log(quizid)
        QuizService.putScore(user.id, quizid, Math.floor((correct / data.length) * 100));

    }, [results, data]);
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Your results</h3>
                    <p>{correctAnswers} of {data.length}</p>
                    <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
                    <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button>
                    <button className="button is-success" onClick={onReset}>Try again</button>
                </div>
            </div>
        </div>

    );
}

export default End;