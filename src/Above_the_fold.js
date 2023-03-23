import React from 'react';
import './Above_the_fold.css';

function Above_the_fold() {
    return (
        <div className="bcg-atf">
            <div className="container">
                <div className="row">
                    <div className='col-md-12 text-center'>
                        <h1 className="h1-atf">Jovan Beljakovic</h1>
                        <p className="p1-atf">Web Developer</p>
                        <a className="a-atf" href="#who">About me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Above_the_fold;