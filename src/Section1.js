import React from 'react';
import './Section2.css';

function Section1() {
    return (
        <div className="container">
            <div id="who" className="row r1">
                <div className='col-md-12'>
                    <p class="who-title">Who am I</p>
                </div>
                <div className='col-md-6 col1 center-vh'>
                    <p>My name is Jovan Beljakovic. I am web developer from Serbia.</p>
                </div>
                <div className='col-md-6 col2 center-vh'>
                    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                </div>
            </div>
        </div>
    );
}

export default Section1;