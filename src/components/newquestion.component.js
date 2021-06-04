import React, { } from 'react';
import axios from 'axios';
import QuizService from '../services/quiz.service'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quizid: '',
            questionDescription: '',
            questionid: '',
            answerDescription: '',
            isCorrect: false
        };
    }

    handleSubmit(e){
        e.preventDefault();
        try {
            QuizService.postQuestion(this.state.quizid, this.state.questionDescription).then((response)=>{
                console.log(response)
                if (response.status === 201){
                    alert("Question added.");
                    this.resetForm();
                    this.setState({questionid: response.data.id})
                }else {
                    alert("Request failed to send.")
                }
            })
        } catch (e) {
            console.error(e);
        }
    }

    handleAnswerSubmit(e) {
        e.preventDefault();
        if (this.state.questionid === '') {
            alert("Add a question before.");
        } else {
            try {
                QuizService.postAnswer(this.state.questionid, this.state.answerDescription, this.state.isCorrect).then((response) => {
                    console.log(response)
                    if (response.status === 201){
                        alert("Answer added.");
                        this.resetForm();
                    } else {
                        alert("Request failed to send.")
                    }
                })
            } catch (e) {
                console.error(e);
            }
        }
    }

    resetForm(){

        this.setState({
            quizid: '',
            questionDescription: '',
            answerDescription: '',
            isCorrect: false})
    }

    render() {

        return (
            <div>
                <div>
                    <form id="question-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <input type="number" id="quizid" placeholder="Enter QuizId..." value={this.state.quizid} onChange={this.onQuizIdChange.bind(this)} />
                        <input type="text" id="description" placeholder="Enter Question..." value={this.state.email} onChange={this.onQuestionDescriptionChange.bind(this)} />
                        <button type="submit">Submit</button>
                    </form>
                    <form id="answer-form" onSubmit={this.handleAnswerSubmit.bind(this)} method="POST">
                        <input type="text" id="answer" placeholder="Enter Answer..." value={this.state.answerDescription} onChange={this.onAnswerDescriptionChange.bind(this)} />
                        Correct ?
                        <input type="checkbox" id="isCorrect" value={this.state.isCorrect} onChange={this.onIsCorrectChange.bind(this)} />
                        <button type="submit">Add answer</button>
                    </form>
                </div>
            </div>
        );
    }
    onQuizIdChange(event) {
        this.setState({quizid: event.target.value})
    }

    onQuestionDescriptionChange(event) {
        this.setState({questionDescription: event.target.value})
    }

    onAnswerDescriptionChange(event) {
        this.setState({answerDescription: event.target.value})
    }

    onIsCorrectChange(event) {
        this.setState({isCorrect: event.target.checked})
    }

}


export default App;