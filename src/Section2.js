import React from 'react';
import './Section1.css';

function Section1() {
    return (
        <div id="what" className="container">
            <div className="row r2">
                <div className='col-md-12'>
                    <p class="what-title">What I do</p>
                </div>
                <div className='col-md-4'>
                    <div className='col1'>
                        <p className="p-title">Creating Landing pages</p>
                        <p className="p-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='col2'>
                        <p className="p-title">Website development</p>
                        <p className="p-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='col3'>
                        <p className="p-title">WordPress development</p>
                        <p className="p-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;