import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TopicDetails = ({topic}) => {
    const{name,logo,total}=topic;
    return (
        <Card style={{ width: '18rem' }} className="mx-auto my-4 p-3">
        <Card.Img variant="top" src={logo} className="bg-dark " />
        <Card.Body>
          <Card.Title><h1>{name}</h1></Card.Title>
          <Card.Text>
          There Total <b>{total} Questions</b>

        </Card.Text>
        <h5>Marks : {total}</h5>
          

        
          <Button variant="primary">Start The Quiz</Button>
        </Card.Body>
      </Card>
    );
};

export default TopicDetails;