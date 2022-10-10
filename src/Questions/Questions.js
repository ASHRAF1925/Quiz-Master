import React from 'react';
import { useLoaderData } from 'react-router';

const Questions = () => {
    const allquestions=useLoaderData();
    console.log(allquestions.data);
    const{total,id,name,logo,questions}=allquestions.data;
    console.log(questions);
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default Questions;