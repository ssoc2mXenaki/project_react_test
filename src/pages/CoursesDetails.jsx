import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

library.add(faCheck, faXmark);

const queryParameters = new URLSearchParams(window.location.search)
const id = queryParameters.get("id")

const Details = () => {
    const [detail, setDetails] = useState([]);
    useEffect(() => getDetails(), []);

    
    const getDetails=()=> {
        axios.get("http://localhost:3001/courses/"+id).then(response => {
              const myDetails = response.data;
              setDetails(myDetails);
            });
      }
      
    const deleteCourse=()=> {
        axios.delete("http://localhost:3001/courses/"+id).then(response => {
            const delCourse = response.data;
            setDetails(delCourse);
          });
    }

  return (
    <>

    <Card key={detail.id} style={{ width: '50rem', border:'none', marginLeft:'30px'}}>
        <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Img src={detail.imagePath} /> <hr />


    <Container>
      <Row>
        <Col><strong>Price: </strong></Col>
        <Col><strong>Duration: {detail.duration}</strong></Col>
      </Row>
      <Row>
        <Col><strong>Online: {detail.online ? <FontAwesomeIcon icon="fa-solid fa-check" color='green' /> : <FontAwesomeIcon icon="fa-solid fa-xmark" />}</strong></Col>
        
         <Col>Dates: {}</Col>
        
        
      </Row>
    </Container><br />
        <Card.Text>
          {detail.description}
        </Card.Text>
        <div style={{overflow:'hidden'}}> <div style={{float:'right'}}> <Button style={{marginRight:'10px'}} >Edit</Button><Button onClick={deleteCourse} variant="danger">Delete</Button> </div> </div>
      </Card.Body>
    </Card>
   <br /><br />
   </>);
}

export default Details;

