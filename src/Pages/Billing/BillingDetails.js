import React from 'react';

const BillingDetails = () => {
    return (
        <div className="overflow-x-auto">
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
                    <tr className='border-2'>
                        <th className='border-2'>20</th>
                        <td className='border-2'>Lorelei Blackstone</td>
                        <td className='border-2'>Data Coordiator</td>
                        <td className='border-2'>Witting, Kutch and Greenfelder</td>
                        <td className='border-2'>Kazakhstan</td>
                        <td className='border-2'>6/3/2020</td>
                    </tr>
                    <tr className='border-2'>
                        <th>20</th>
                        <td>Lorelei Blackstone</td>
                        <td>Data Coordiator</td>
                        <td>Witting, Kutch and Greenfelder</td>
                        <td>Kazakhstan</td>
                        <td>6/3/2020</td>
                    </tr>
                    <tr className='border-2'>
                        <th>20</th>
                        <td>Lorelei Blackstone</td>
                        <td>Data Coordiator</td>
                        <td>Witting, Kutch and Greenfelder</td>
                        <td>Kazakhstan</td>
                        <td>6/3/2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BillingDetails;
