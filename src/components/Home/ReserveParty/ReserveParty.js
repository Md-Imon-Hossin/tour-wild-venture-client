
import React from 'react';
import "./ReserveParty.css";
import Button from 'react-bootstrap/Button';

const ReserveParty = () => {
    return (
        <div>

            <div className='reserve-party'>
                <h2 className='text-white mb-3'>RESERVE for PARTIES!
                </h2>
                <Button className='text-white py-3 px-5' variant="warning">View Schedule</Button>
            </div>
        </div>
    );
};

export default ReserveParty;