import { faHandsHoldingChild, faPersonBiking, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './shortSummary.css'
import React from 'react';

const card = [
    {
        name: 'Afforadable Price',
        icon: 'faHandsHoldingChild',
        desc: 'We privide best service in cheap price'
    },
    {
        name: 'Best Product',
        icon: 'faPersonBiking',
        desc: 'We privide best product in your range'
    },
    {
        name: 'Quick Delivery',
        icon: 'faTruckFast',
        desc: '3-5 Days in every delivery'
    },
]

const ShortSummary = () => {
    return (
        <div className='container short-summary mx-auto my-5'>
            <h3 className='text-center my-5 fw-bold'>We <span className="text-primary">Provide</span></h3>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                <div className="col mx-auto">
                    <div  className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faHandsHoldingChild} />
                        <h5 className='fw-bold'>Affordable Price</h5>
                        <small className='text-muted'>We privide best service in cheap price</small>
                    </div>
                </div>
                <div className="col mx-auto my-4">
                    <div className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faPersonBiking} />
                        <h5 className='fw-bold'>Best Cycle</h5>
                        <small className='text-muted'>We privide best product in your range</small>
                    </div>
                </div>
                
                <div className="col mx-auto">
                    <div className="p-5 card shadow-lg text-center">
                        <FontAwesomeIcon className='icon' icon={faTruckFast} />
                        <h5 className='fw-bold'>Quick Delivary</h5>
                        <small className='text-muted'>3-5 Days in every delivery</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortSummary;