// pages/index.js (Contact Card List)
import React, { useState, useEffect } from 'react';
import { getUsers } from '../ApiCall/Users'; // Function to fetch users from API
import ContactCard from '../components/ContactCard';
import Pagination from '../components/Pagination';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    useEffect(() => {
        console.log('UserComponet has been mounted..');
        const fetchUsers = async () => {
            const data = await getUsers();
            console.log('ParentComponent...???', data);
            setUsers(data);
        };

        fetchUsers();
    }, []);

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-2 gap-4">
                {
                    currentUsers.map(UserVal => {
                        // // return(
                        //     <h1>{UserVal}</h1>
                        // // )
                        //   <ContactCard key={user.id} user={user} />
                    })
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
