import React from 'react';
import './Section3.css';

function Section1() {
    return (
        <div id="network" className="container">
            <div className="row r3">
                <div className='col-md-12'>
                    <p class="net-title">My social networks</p>
                </div>
                <div className='col-md-6'>
                    <div className='col1 text-center'>
                        <a className="a-sec3" href="https://www.linkedin.com/in/jovan-beljakovic/" target="_blank" rel="noopener">LinkedIn</a>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='col2 text-center'>
                        <a className="a-sec3" href="https://github.com/JovanB96" target="_blank" rel="noopener">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;