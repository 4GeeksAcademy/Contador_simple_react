import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap';
import SimpleCounter from "./components/SimpleCounter.jsx"

import '../styles/index.css';

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

const updateCounter = () => {
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;
  counter++;
  
  root.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
  );
};

setInterval(updateCounter, 1000);