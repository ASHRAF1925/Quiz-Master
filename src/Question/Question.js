import React from "react";
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
  const QuestionID=questions.children[1];

  const checkanswer = (correct_answer, selected_answer) => {

    if (selected_answer === correct_answer) {
      
      toast.success(
        "Congratulations.You have Selected the Correct Answer!",
        { position: "top-center" },
        { position: "top-center" }
       
      );
    } else {

      toast.error(
        "Worng Answer",
        { position: "top-center" },
        { position: "top-center" }
      );
    }
  };

  const correctAnswer = (correct_answer) => {

  
    toast.success(correct_answer, { position: "top-center" });
  };

  const question_text = Substring(questions.children[3].question);

  return (
    <div className="bg-light mt-5 p-5 container">
      <div className="position-relative">
        <FontAwesomeIcon
          onClick={() =>
            correctAnswer(
              questions.children[3].correctAnswer
           
            )
          }
          className="position-absolute top-0 end-0 h1 ms-2"
          icon={faEye}
        />
        <ToastContainer autoClose={1000} />
      </div>

      <h1 className="mx-5">
        Question:{QuestionID+1} {question_text}
      </h1>

      <Container>
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
                  checkanswer(
                    questions.children[3].correctAnswer,
                    option

                  )
                }
                
                className="mx-4 option-box   "
                for={option}
              >
                {option}
              </label>

              <ToastContainer autoClose={1000} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Question;
