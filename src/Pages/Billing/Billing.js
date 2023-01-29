import React from 'react';
import BillingDetails from './BillingDetails';
import BillingModal from './BillingModal';

const Billing = () => {
    return (
        <div className='mt-24'>
            <div className='flex justify-between mb-5 py-2 px-4 bg-slate-300 rounded-xl'>
                <div>
                    <input type="text" placeholder="search" className="input input-bordered w-full max-w-2xl rounded-lg" />
                </div>
                <div>
                    <label htmlFor="my-modal" className="btn btn-info rounded-lg">open modal</label>
                </div>
            </div>
            <BillingModal></BillingModal>
            <BillingDetails></BillingDetails>
        </div>
    );
};

export default Billing;
