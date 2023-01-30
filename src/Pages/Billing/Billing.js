import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BillingDetails from './BillingDetails';
import BillingModal from './BillingModal';
import Search from './Search';

const Billing = () => {
    const [ search, setSearch ] = useState( '' )
    const { data: bills = [], isLoading } = useQuery( {
        queryKey: [ "bills" ],
        queryFn: () =>
            fetch( "http://localhost:5000/api/billing-list" ).then( ( res ) => res.json() ),
    } );

    const handleSearch = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        // console.log( search );
        setSearch( search )
    }

    const filteredSearch = bills.filter(
        billing => {
            return (
                billing.name.toLowerCase().includes( search.toLowerCase() ) ||
                billing.email.toLowerCase().includes( search.toLowerCase() ) ||
                billing.phone.toLowerCase().includes( search.toLowerCase() )
            );
        }
    );


    return (
        <div className='mt-24'>
            <div className='flex justify-between mb-5 py-2 px-4 bg-slate-300 rounded-lg'>
                <div>
                    <form onSubmit={ handleSearch } className="flex justify-between gap-4">
                        <input type="text" placeholder="search" name='search' className="input input-bordered max-w-2xl rounded-xl" />
                        <input className="btn btn-primary rounded-xl" type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <label htmlFor="my-modal" className="btn btn-info rounded-lg">Add bill</label>
                </div>
            </div>
            <div>
                <div>
                    { search.length !== 0 &&
                        <Search filteredSearch={ filteredSearch }></Search>
                    }
                </div>
                <h2 className='text-4xl mb-4'>All Billings</h2>
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

                            bills.map( bill => <BillingDetails key={ bill._id } bill={ bill } isLoading={ isLoading }></BillingDetails> )
                        }
                    </tbody>
                </table>
            </div>
            <BillingModal></BillingModal>
        </div>
    );
};

export default Billing;
