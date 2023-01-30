import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
import BillingModal from './BillingModal';

const BillingDetails = ( { bill, isLoading } ) => {
    const [ displayBills, setDisplayBills ] = useState( bill )
    const [ bills, setBills ] = useState( {} )
    const { _id, name, email, phone, amount } = bill;

    const handleUpdate = event => {
        setBills( event )
        // console.log( event )
        // fetch( `http://localhost:5000/api/update-billing/${ _id }`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify( bill )
        // } )
        //     .then( res => res.json() )
        //     .then( data => {
        //         toast.success( 'updated successfully' )
        //     } )
    }

    const handleDelete = bill => {
        const agree = window.confirm( `Are sure, you want to delete: ${ bill.name }` )

        if ( agree ) {
            fetch( `http://localhost:5000/api/delete-billing/${ bill._id }`, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    // console.log( data )
                    if ( data.deletedCount > 0 ) {
                        alert( 'Bill deleted successfully.' )
                        const remainingBills = displayBills.filter( bil => bil._id !== bill._id );
                        setDisplayBills( remainingBills )
                    }
                } )
        }
    }

    return (
        <tr className='border-2'>
            <th className='border-2'>{ isLoading ? 'Generating id' : _id }</th>
            <td className='border-2'>{ name }</td>
            <td className='border-2'>{ email }</td>
            <td className='border-2'>{ phone }</td>
            <td className='border-2'>{ amount }</td>
            <td className='flex justify-around border-2'>
                <label onClick={ () => handleUpdate( bill ) } htmlFor="my-modal" className="btn btn-outline btn-info rounded-lg">Edit</label>
                <div className="divider divider-horizontal">OR</div>
                <button onClick={ () => handleDelete( bill ) } className='btn btn-outline btn-error rounded-lg'>Delete</button>
            </td>
            <BillingModal handleUpdate={ handleUpdate } bills={ bills }></BillingModal>
        </tr>
    );
};

export default BillingDetails;
