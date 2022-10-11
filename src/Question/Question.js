import React from "react";
import { Substring } from "../Utilities/Substring";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = (questions) => {
  // console.log(questions.children[3].correctAnswer);

  const checkanswer=(correct_answer,selected_answer)=>{

    console.log(selected_answer);
   
              
    if(selected_answer===correct_answer)
    {
      toast.success("Congratulations.You have Completed the Plan Successfully!",{position:"top-center"},{position:"top-center"});
      

    }
    else{
      toast.error("Worng Answer",{position:"top-center"},{position:"top-center"});
      


    }
  }

  const question_text = Substring(questions.children[3].question);

  return (
    <div className="bg-light mt-5 p-5 container">
      <h1>
        Question:{questions.children[1] + 1} {question_text}
      </h1>

      <Container>
        <Row>
          {questions.children[3].options.map((option) => (
            <Col lg={6} className="mt-4">
              <input type="radio" id={option} name={questions.children[1] + 1}value={option} />
              
              
              <label for={option} onClick={()=>checkanswer(questions.children[3].correctAnswer,option)}><div className="mx-4 option-box">{option}</div></label>
              <ToastContainer autoClose={1000} />
              

              
            </Col>
          ))}
        </Row>
      </Container>
   
    </div>
  );
};

export default Question;
