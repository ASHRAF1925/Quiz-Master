import React from "react";
import { Substring } from "../Utilities/Substring";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Question.css'

const Question = (questions) => {
  console.log(questions.children[1]);

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
              <label for={option}><div className="mx-4 option-box">{option}</div></label>
              <br></br>

              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Question;
