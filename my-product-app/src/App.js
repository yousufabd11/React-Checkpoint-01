import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';

const App = () => {
  const firstName = "Yousuf"; // Change this to your first name or leave it as an empty string

  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '2rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Hello, {firstName ? firstName : "there"}!
      </p>
      {firstName && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <img src="https://thumbs.dreamstime.com/b/profile-icon-vector-sign-symbol-111945058.jpg" alt="Profile" />
        </div>
      )}
    </div>
  );
};

export default App;
