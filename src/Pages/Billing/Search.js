import React from 'react';

const Search = ( { filteredSearch } ) => {
    // console.log( filteredSearch )
    return (
        <div className='mb-9 border-2 shadow-lg p-6'>
            <h2 className='text-3xl mb-4'>Search Result</h2>
            <table className="table table-compact w-full border-2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Payable Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        filteredSearch.map( bill => <tr key={ bill._id } bill={ bill } className='border-2'>
                            <th className='border-2'>{ bill._id }</th>
                            <td className='border-2'>{ bill.name }</td>
                            <td className='border-2'>{ bill.email }</td>
                            <td className='border-2'>{ bill.phone }</td>
                            <td className='border-2'>{ bill.amount }</td>
                        </tr> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Search;
