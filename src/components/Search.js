import React, { useState } from 'react';

const Search = ({ data,setFilterData}) => {
    const [query, setQuery] = useState('');
    // const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        const filteredResults = data.filter(item =>{
            return item.name.toLowerCase().includes(inputValue.toLowerCase());
        });
        if(inputValue.length == 0){
            console.log('no value in search input vlaue...');
            setFilterData([]);
        }else{
            console.log('inputValue...??/',inputValue);
            // setFilteredData(filteredResults);
            setFilterData(filteredResults);
        }
    };

    return (
        <div className='flex justify-end items-center mt-3 mr-6'>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            {/* <ul className="mt-2">
                {filteredData.map((item, index) => (
                    <li key={index} className="border-b border-gray-300 py-2">
                        {item}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Search;
