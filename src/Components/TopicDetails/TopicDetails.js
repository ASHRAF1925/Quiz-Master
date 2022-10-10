import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TopicDetails = ({topic}) => {
    const{id,name,logo,total}=topic;
    return (
        <Card style={{ width: '18rem' }} className="mx-auto my-4 p-3">
        <Card.Img variant="top" src={logo} className="bg-dark " />
        <Card.Body>
          <Card.Title><h1>{name}</h1></Card.Title>
          <Card.Text>
          There Total <b>{total} Questions</b>

        </Card.Text>
        <h5>Marks : {total}</h5>
          

        
          <Link to={`/topics/${id}`}><Button variant="primary">Start The Quiz  <small className='ms-2'><FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon></small> </Button></Link>
        </Card.Body>
      </Card>
    );
};

export default TopicDetails;