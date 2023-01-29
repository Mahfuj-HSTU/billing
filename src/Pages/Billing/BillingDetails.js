import React from 'react';

const BillingDetails = ( { bill } ) => {
    const { _id, name, email, phone, amount } = bill;

    // let totalAmount =
    // console.log( bill )
    return (
        <tr className='border-2'>
            <th className='border-2'>{ _id }</th>
            <td className='border-2'>{ name }</td>
            <td className='border-2'>{ email }</td>
            <td className='border-2'>{ phone }</td>
            <td className='border-2'>{ amount }</td>
            <td className='flex justify-around border-2'>
                <button className="btn btn-outline btn-info rounded-lg">Edit</button>
                <div className="divider divider-horizontal">OR</div>
                <button className='btn btn-outline btn-error rounded-lg'>Delete</button>
            </td>
        </tr>
    );
};

export default BillingDetails;
