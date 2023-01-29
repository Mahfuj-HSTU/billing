import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Shared/Loading/Loading';

const BillingModal = ( { refetch, isLoading } ) => {
    const [ bills, setBills ] = useState( {} )

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const url = ( 'http://localhost:5000/api/add-billing' )
        fetch( url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( bills )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.acknowledged ) {
                    refetch();
                    toast.success( 'Bills added successfully' )
                    event.target.reset();
                }
                // console.log( data )
            } )
        console.log( bills )
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newBills = { ...bills };
        newBills[ field ] = value;
        setBills( newBills )
    }

    if ( isLoading ) {
        <Loading></Loading>
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-7">
                        <h1 className="text-3xl text-center font-bold">Your information </h1>
                        <form onSubmit={ handleSubmit } className="card-body">
                            <div className="form-control">
                                <input onChange={ handleInputBlur } type="text" name='name' placeholder="your name" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <input onChange={ handleInputBlur } type="email" name='email' placeholder="your email" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <input minLength={ 9 } maxLength={ 11 } onChange={ handleInputBlur } type="text" name='phone' placeholder="your phone number" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <input onChange={ handleInputBlur } type="number" name='amount' placeholder="Payable Amount" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control mt-6">
                                <input onChange={ handleInputBlur } className="btn btn-primary" type="submit" value="Submit" />
                                <label htmlFor="my-modal" className='btn mt-5' >Close</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingModal;
