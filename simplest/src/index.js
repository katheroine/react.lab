import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(properties) {
  return <h1>Hi, there!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
