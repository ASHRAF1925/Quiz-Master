import React from 'react';
import { useLoaderData } from 'react-router';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question/Question';
const Questions = () => {
    const allquestions=useLoaderData();
  
    const{total,id,name,logo,questions}=allquestions.data;
    // console.log(typeof(questions));
    return (
        <div>
            <h1>Welcome to the Quiz of  {name}</h1>
            <Card.Img style={{ width: '18rem' }}variant="top" src={logo} className="bg-dark " />
            <h4 className='mt-4'>There are total <b>{total} Questions</b></h4>

            <Container>
        <Row>
          <Col lg={12} >
            <Row>
            { 
                questions.map(question=><Question>
                    key={question.id},
                    Question={question}
                </Question>)
            }
            </Row>
           </Col>
         
        </Row>
    
      </Container>
        </div>
    );
};

export default Questions;