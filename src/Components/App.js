import React from 'react';
import './App.css';
import { connect } from '../custom-react-redux/myConnect';
import Counter_ from './Counter';
import { useState } from 'react';



function mapStateToProps(state) {
  return {
    counter: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (type) => {
      console.log(type)
      dispatch(type)
    }
  }
}


const Counter = connect(mapStateToProps, mapDispatchToProps,)(Counter_)

function App() {
  
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button className='show-button' onClick={() => setShow(x => !x)}>{!show ? 'show counter' : 'hide counter'}</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
