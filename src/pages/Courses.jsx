import React, { useEffect, useState } from 'react';
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios';

library.add(faCheckCircle, faTimesCircle);

function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/courses');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        alert('There was an error fetching the data. Please try again later.');
      }
    }
    fetchData();
  }, []);

  return (
    <CardDeck style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <Card key={index} style={{ backgroundColor: 'white', width: 'calc(50% - 10px)', marginRight: '10px', marginBottom: '10px' }}>
          <Card.Img variant="top" src={item.imagePath} alt={item.title} />
          <Card.Body>
            <Card.Title><h4>{item.title}</h4></Card.Title>
            <Card.Text><strong>Dates:</strong> <i>{item.dates.start_date}</i> - <i>{item.dates.end_date}</i></Card.Text>
            <Card.Text><strong>Duration: </strong>{item.duration}</Card.Text>
            <Card.Text><strong>Price: </strong> <i>(Regular)</i> {item.price.normal}  € <strong>|</strong> <i>(Early Bird Discount)</i> {item.price.early_bird}  €</Card.Text>
            <Card.Text style={{ display: 'flex', alignItems: 'center' }}>
             <strong>Online:</strong>
             <div style={{ marginLeft: '10px' }}>
             {item.online ? (
             <FontAwesomeIcon icon="check-circle" size="lg" />
             ) : (
             <FontAwesomeIcon icon="times-circle" size="lg" />
             )}
             </div>
             <div style={{ marginLeft: '20px' }}>
             <Button variant="dark" style={{ backgroundColor: 'black' }}>View</Button>
             </div>
            </Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
}

function CoursesApp() {
  return (
    <div>
      <h1>Courses</h1>
      <Courses />
    </div>
  );
}

export default CoursesApp;
