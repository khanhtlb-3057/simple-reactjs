import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloWorld';

import Button from 'react-bootstrap/Button';
function App() {
  const [value, setValue]=useState(0)

  const updateValue=()=>{
    setValue(value => value+1)
  }

  return (
    <div className="App">
      <HelloWorld name='khanh' age={21}/>
      <span>{value}</span> <br />
      <Button variant="primary" onClick={updateValue}>click</Button>{' '}
      {/* <Row>
        <Col>1 of 1</Col>
      </Row> */}
    </div>
  );
}

export default App;
