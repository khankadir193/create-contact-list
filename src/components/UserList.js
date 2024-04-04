import React, { useState, useEffect } from 'react';
import { getUsers } from '../ApiCall/Users';
import ContactCard from '../components/ContactCard';
import Pagination from '../components/Pagination';
import user from './user.json';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState();
    const [filterData, setFilterData] = useState(user);

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

    const handleItemSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filteredData(query);
    };

    const filteredData = (query) => {
        const filtered = filterData.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilterData(filtered);
    };

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>

            <div className="container mx-auto mt-8">
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleItemSearch}
                    setFilterData={filterData}
                    width="100%"
                    height="50vh"
                />
                <div className="grid grid-cols-2 gap-4">
                    {currentUsers.map(user => (
                        <ContactCard key={user.id} user={user} />
                    ))}
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

