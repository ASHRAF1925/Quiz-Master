import React from 'react';
import TopicDetails from '../TopicDetails/TopicDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topic = (topic) => {
    // console.log(topic.children[3])
    
    // const{name}=topic;
   
    return (
      
            <TopicDetails topic={topic.children[3]}  >
                
                </TopicDetails>
      
     
        
    );
};

export default Topic;