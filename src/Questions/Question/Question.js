import React from 'react';
import { Substring } from '../../Utilities/Substring';

const Question = (questions) => {
    console.log(questions.children[3].options)
    const question_text=Substring(questions.children[3].question);
    return (
        <div>
            <h1>{question_text}</h1>
            <br />
            <br />
            {
                 questions.children[3].options.map(option=> <p>{option}</p>)

            }
        </div>
    );
};

export default Question;