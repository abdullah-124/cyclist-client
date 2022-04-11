import { faBicycle, faCartFlatbed, faPersonBiking, faTruckFast, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './counter.css'
import React from 'react';
import CountUp from 'react-countup'

const Counter = () => {
    return (
        <div className='container counter mx-auto'>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                <div className="col mx-auto">
                    <div  className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faBicycle} />
                        <h5 className='fw-bold'><CountUp start={0} end={10} duration={3} />+</h5>
                        <small className='text-muted'>Products</small>
                    </div>
                </div>
                <div className="col mx-auto my-4">
                    <div className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faUserAlt} />
                        <h5 className='fw-bold'><CountUp start={0} end={50} duration={3} />+</h5>
                        <small className='text-muted'>Users</small>
                    </div>
                </div>
                
                <div className="col mx-auto">
                    <div className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faCartFlatbed} />
                        <h5 className='fw-bold'><CountUp start={20} end={10} duration={3} />+</h5>
                        <small className='text-muted'>Orders</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;