import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const BillingModal = () => {
    const [ bills, setBills ] = useState( {} )

    const handleSubmit = ( event ) => {
        event.preventDefault();
        console.log( bills )
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newBills = { ...bills };
        newBills[ field ] = value;
        setBills( newBills )
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
                                <input onChange={ handleInputBlur } type="number" name='phone' placeholder="your phone number" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <input onChange={ handleInputBlur } type="amount" name='amount' placeholder="Payable Amount" className="input input-bordered rounded-lg" required />
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
