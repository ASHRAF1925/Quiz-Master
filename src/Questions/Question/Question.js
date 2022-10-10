import React from 'react';

const Question = (questions) => {
    console.log(questions.children[3].options)
    return (
        <div>
            <h1>{questions.children[3].question}</h1>
            <br />
            <br />
            {
                 questions.children[3].options.map(option=> <p>{option}</p>)

            }
        </div>
    );
};

export default Question;