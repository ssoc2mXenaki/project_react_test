import React, { useEffect, useState } from 'react';
import '../index.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Dashboard = () => {
  const [stat, setStats] = useState([]);
  useEffect(() => getStats(), []);

  const getStats=()=> {
    axios.get('http://localhost:3001/stats').then(response => {
          const myStats = response.data;
          setStats(myStats);
        });
  }

  const [course, setCourses] = useState([]);
  useEffect(() => getCourses(), []);

  const getCourses=()=> {
    axios.get('http://localhost:3001/courses').then(response => {
          const myCourses = response.data;
          setCourses(myCourses);
        });
  }

    return (
    <>
    <Card style={{ marginLeft: '30px', marginTop: '20px', marginRight: '30px', borderRadius:0, border:'none', backgroundColor:'#f8f9fa' }}>
      <Card.Body>
        <Card.Title>Welcome to our Dashboard!</Card.Title>
        <Card.Text>
          Manage everything and have fun!
        </Card.Text>
      </Card.Body>
    </Card>
    
    <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '30px',marginTop: '20px', marginRight: '30px' }}>
    
      {stat.map(stats => (
          <Card key={stats.id} style={{ width: "24%"}}>
            <Card.Body>
              <Card.Text>{stats.title}: <Badge bg="primary">{stats.amount}</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  
    <div style={{marginLeft: '30px',marginTop: '20px', marginRight: '30px', border:'solid lightgrey 1px', borderRadius:6}}>
  
     
    
        <Table striped>
            <thead>
              <tr>
                <td>Last 5 Courses</td>
              </tr>
              <tr>
                <th>Title</th>
                <th>Online</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
                </tr>
            </thead>
          
            <tbody>
            {course.map(courses => (
              <tr>
                <td>{courses.title}</td>
                <td>{courses.online}</td>
                <td>{courses.price.normal}</td>
                <td>{courses.dates.start_date}-{courses.dates.end_date}</td>
                <td><Button >View details</Button></td>
              </tr>
               ))}
            </tbody>


          </Table>
      
   
    </div>
    </>
      );
  }
   export default Dashboard;
  

