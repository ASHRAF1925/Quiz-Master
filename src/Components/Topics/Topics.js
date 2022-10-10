import React from 'react';
import { useLoaderData } from 'react-router';
import Topic from '../Topic/Topic';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topics = () => {
    const topics=useLoaderData();
 
   
    return (
        <div>
            <h1>Select Your Favourite Topic</h1>
            <Container>
        <Row>
          <Col lg={12} className="bg-primary">
            <Row>
            { 
                topics.data.map(topic=><Topic>
                    key={topic.id},
                    topic={topic}
                </Topic>)
            }
            </Row>
           </Col>
         
        </Row>
    
      </Container>
            
        </div>
    );
};

export default Topics;