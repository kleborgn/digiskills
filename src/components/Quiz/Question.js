import React, { useState, useEffect, useRef } from 'react';
import 'bulma/css/bulma.min.css';
const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radioWrapper = useRef();

    useEffect(() => {
        const findCheckInput = radioWrapper.current.querySelector('input:checked');
        if (findCheckInput) {
            findCheckInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option !');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }
    console.log(data)
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5"> {data.question}</h2>
                    <div className="control" ref={radioWrapper} multiple={true}>
                        
                        {data.choices.map((choice,i) => (
                            <label className="radio has-background-light" key={i}>
                                <input  multiple={true} type="radio" name="answer" value={choice} onChange={changeHandler} />
                                {choice}
                            </label>
                            
                        ))}
                       
                    </div>
                    {error && <div className="has-text-danger"> {error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>

                </div>
            </div>
        </div>
    );
}

export default Question;