import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
  return (
    <div className="app h-100 d-flex align-items-center justify-content-center">
      <SignUp />
    </div>
  );
}

export default App;
