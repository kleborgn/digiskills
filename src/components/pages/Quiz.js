import React from 'react';
import QuizService from '../../services/quiz.service';
import QuizRender from './QuizRender';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    async function getAnswers(element) {
      try {
        let answers = await QuizService.getAnswersByQuestion(element.id);
        element["answers"].push(answers.data);
        return element;
      } catch (e) {
        console.error(e);
      }
    }

    async function buildjson(quizid) {
      try {
        let questions = await QuizService.getQuestionsByQuiz(quizid);
        let data = questions.data;
        for (let i = 0; i < data.length; i++) {
          data[i]["answers"] = [];
        }
        for (let i = 0; i < data.length; i++) {
          data[i] = await getAnswers(data[i]);
        }
        return data;
      } catch (e) {
        console.error(e);
      }
    }

    var quizData = [];
    quizData["data"] = [];
    buildjson(this.props.match.params.id).then(value => {
      let res = value;
      var data = [];
      var field = {};
      for (let i = 0; i < res.length; i++) {
        field = {};
        field["question"] = res[i].description;
        field["choices"] = [];
        for (let j = 0; j < res[i].answers[0].length; j++) {
          field["choices"].push(res[i].answers[0][j].description);
          if (res[i].answers[0][j].isCorrect) {
            field["answer"] = res[i].answers[0][j].description;
          }
        }
        data[i] = field;
      }
      //console.log(data);
      return data;
    }).then(data => {
      for (let i = 0; i < data.length; i++) {
        quizData["data"][i]= data[i];
      }
      this.setState({data: quizData});
    });
  }
  render () {
      if (!this.state.data) return null

      return(
          <>
            <QuizRender
                quizData = {this.state.data}
                quizid={this.props.match.params.id}
                />
          </>
      );
  }
}
