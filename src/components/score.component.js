import React from 'react';
import QuizService from '../services/quiz.service';

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        async function getScores(userid) {
            try {
                let scores = await QuizService.getScore(userid);
                return scores.data
            } catch (e) {
                console.error(e);
            }
        }

        getScores(2).then(data => {
            this.setState({data: data})
        });
    }

    render() {
        if (!this.state.data) return null
        return (
            <>
                <div>
                    <ul>
                    {this.state.data.map(item =>
                        <li key="{item.quizid}">Quiz {item.quizid} : {item.value}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}