// pages/index.js (Contact Card List)
import React, { useState, useEffect } from 'react';
import { getUsers } from '../ApiCall/Users'; // Function to fetch users from API
import ContactCard from '../components/ContactCard';
// import Pagination from '../components/Pagination';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    useEffect(() => {
        console.log('UserComponet has been mounted..');
        const fetchUsers = async () => {
            const response = await getUsers();
            console.log('ParentComponent...???', response);
            setUsers(response);
        };

        fetchUsers();
    }, [0]);

    // Get current users
    let currentUsers = []
    if (users.length) {
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        currentUsers = users?.data?.slice(indexOfFirstUser, indexOfLastUser);
        console.log('currentUsers...', currentUsers);
    }
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-2 gap-4">
                {
                    <div className="grid grid-cols-2 gap-4">
                        {currentUsers?.map(user => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </div>
                }
            </div>
            {/* <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      /> */}
        </div>
    );
};

export default UserList;
