import axios from "axios";

const API_URL = "http://localhost:8080/";

class QuizService {
    getQuizs() {
        return axios.get(API_URL + "quizs")
    }

    getQuiz(id) {
        return axios.get(API_URL + "quizs/" + id)
    }

    getQuestions() {
        return axios.get(API_URL + "questions")
    }

    getQuestion(id) {
        return axios.get(API_URL + "questions/" + id)
    }

    getQuestionsByQuiz(quizid) {
        return axios.get(API_URL + "questions/byQuiz/" + quizid)
    }

    postQuestion(quizid, description) {
        return axios.post(API_URL + "questions", {
            quizid,
            description
        })
    }

    getAnswers() {
        return axios.get(API_URL + "answers")
    }

    getAnswer(id) {
        return axios.get(API_URL + "answers/" + id)
    }

    getAnswersByQuestion(questionid) {
        return axios.get(API_URL + "answers/byQuestion/" + questionid)
    }
    
}

export default new QuizService();