import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BillingDetails from './BillingDetails';
import BillingModal from './BillingModal';

const Billing = () => {
    const { data: bills = [] } = useQuery( {
        queryKey: [ "bills" ],
        queryFn: () =>
            fetch( "http://localhost:5000/api/billing-list" ).then( ( res ) => res.json() ),
    } );
    // console.log( bills );

    return (
        <div className='mt-24'>
            <div className='flex justify-between mb-5 py-2 px-4 bg-slate-300 rounded-lg'>
                <div>
                    <input type="text" placeholder="search" className="input input-bordered w-full max-w-2xl rounded-xl" />
                </div>
                <div>
                    <label htmlFor="my-modal" className="btn btn-info rounded-lg">Add bill</label>
                </div>
            </div>
            <div>
                <table className="table table-compact w-full border-2">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Payable Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bills.map( bill => <BillingDetails key={ bill._id } bill={ bill }></BillingDetails> )
                        }
                    </tbody>
                </table>
            </div>
            <BillingModal></BillingModal>
        </div>
    );
};

export default Billing;
