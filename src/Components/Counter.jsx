import React from 'react';
import { incrementCounter, decrementCounter } from '../store/actions'
import './Counter.css';

const Counter_ = ({ counter, increment }) => {
    return (
        <div className='counter'>
            <h3>Counter:{counter}</h3>
            <div className='counter-buttons'></div>
            <button style={{ width: '100px', height: '30px' }} onClick={() => increment(incrementCounter(1))} className='increment'>increase</button>
            <button style={{ width: '100px', height: '30px' }} onClick={() => increment(decrementCounter(2))} className='increment'>decrease</button>

        </div>
    )
};

export default Counter_;