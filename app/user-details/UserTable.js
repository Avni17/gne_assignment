'use client';
import userData from '../../public/database/users.json';
import React, { useState, useEffect } from 'react';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch user data from the JSON file or your API
        setUsers(userData.users);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">User Details</h1>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 border rounded mb-4"
            />

            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">ID</th>
                        <th className="py-2 px-4 border-b text-left">Username</th>
                        <th className="py-2 px-4 border-b text-left">Email</th>
                        <th className="py-2 px-4 border-b text-left">Phone</th>
                        <th className="py-2 px-4 border-b text-left">Creation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.username}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">{user.phone}</td>
                            <td className="py-2 px-4 border-b">{user.creationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
