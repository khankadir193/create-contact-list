import React, { useState, useEffect } from 'react';
import { getUsers } from '../ApiCall/Users';
import ContactCard from '../components/ContactCard';
import Pagination from '../components/Pagination';
import user from './user.json';
import Search from './Search';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                // setUsers(response.data);
                setUsers(user);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);


    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    console.log('currentUser outside of the scope...',currentUsers);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Search data={user} setFilterData={setFilteredData} />
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-2 gap-4">
                    {
                        (filteredData.length > 0 ? filteredData : currentUsers).map(user => ( <ContactCard key={user.id} user={user} />))
                    }

                </div>
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={users.length}
                    paginate={paginate}
                />
            </div>
        </>

    );
};

export default UserList;

