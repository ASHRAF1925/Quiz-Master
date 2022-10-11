import React, { useState } from "react";
import { Substring } from "../Utilities/Substring";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Question = (questions) => {
  


  const QuestionID = questions.children[1];
  let visited = false;
  let answer_checked = true;

  const checkanswer = (correct_answer, selected_answer) => {
    if (!answer_checked) {
      toast.info("Answer is answered already seen", { position: "top-center" });
   
    } else {
      if (visited) {
        toast.info("Question is answered already", { position: "top-center" });
      } else {
        visited = true;

        if (selected_answer === correct_answer) {
          
          toast.success(
            "Congratulations.You have Selected the Correct Answer!",
            { position: "top-center" }

          );
         
        } else {
        
          toast.error("Worng Answer", { position: "top-center" });
       
        }
      }
    }
  };

  const correctAnswer = (correct_answer) => {
    answer_checked = false;

    toast.success(correct_answer, { position: "top-center" });
  };

  const question_text = Substring(questions.children[3].question);

  return (
    <div className="container">
      <Container>
   
        <Row>
          <Col lg={12} sm={12} >
            <Row>
            <div className="bg-light mt-5 p-5 container ">
      <div className="position-relative">
        <FontAwesomeIcon
          onClick={() => correctAnswer(questions.children[3].correctAnswer)}
          className="position-absolute top-0 end-0 h1 ms-2"
          icon={faEye}
        />
      </div>

      <h1 className="mx-5 bg-primary p-1">
        Question:{QuestionID + 1} {question_text}
      </h1>

      <Container className="bg-info p-3">
        <Row>
          {questions.children[3].options.map((option) => (
            <Col lg={6} className="mt-4">
              <input
                type="radio"
                id={option}
                name={QuestionID}
                value={option}
              />

              <label
                onClick={() =>
                  checkanswer(questions.children[3].correctAnswer, option)
                }
                className="mx-3 option-box   "
                for={option}
              >
                {option}
              </label>
            </Col>

          ))}
          
        </Row>
      </Container>
      <ToastContainer autoClose={1000} />
    </div>
   
            </Row>
           </Col>

          
         
        </Row>
    
      </Container>
    </div>
    
  );
};

export default Question;
