'use client';
import userData from '../../public/database/users.json';
import React, { useState, useEffect } from 'react';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchById, setSearchById] = useState('');
    const [searchByUsername, setSearchByUsername] = useState('');
    const [searchByEmail, setSearchByEmail] = useState('');
    const [searchByPhone, setSearchByPhone] = useState('');
    const [searchByCreationDate, setSearchByCreationDate] = useState('');
    useEffect(() => {
        // Fetch user data from the JSON file or your API
        setUsers(userData.users);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterById = (users, searchTerm) => {
        return users.filter((user) => user.id.toString().includes(searchTerm));
    };

    const filterByUsername = (users, searchTerm) => {
        return users.filter((user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filterByEmail = (users, searchTerm) => {
        return users.filter((user) =>
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filterByPhone = (users, searchTerm) => {
        return users.filter((user) =>
            user.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filterByCreationDate = (users, searchTerm) => {
        return users.filter((user) =>
            user.creationDate.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    // Filter users based on the search term
    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.id.toString().includes(searchTerm) || user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.phone.toLowerCase().includes(searchTerm.toLowerCase()) || user.creationDate.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesId = user.id.toString().includes(searchById);
        const matchesUsername = user.username.toLowerCase().includes(searchByUsername.toLowerCase());
        const matchesEmail = user.email.toLowerCase().includes(searchByEmail.toLowerCase());
        const matchesPhone = user.phone.toLowerCase().includes(searchByPhone.toLowerCase());
        const matchesCreationDate = user.creationDate.toLowerCase().includes(searchByCreationDate.toLowerCase());

        // Combine the conditions based on your requirements
        return matchesId && matchesUsername && matchesEmail && matchesPhone && matchesCreationDate && matchesSearch;
    });
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">User Details</h1>
            <input
                type="text"
                placeholder="Search all Columns"
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
                    <tr>
                        <th className="border-b text-left"> <input
                            type="text"
                            placeholder="Search by ID"
                            value={searchById}
                            onChange={(e) => setSearchById(e.target.value)}
                            className="px-4 py-2 border rounded mb-4 w-32"
                        /></th>
                        <th className="border-b text-left"> <input
                            type="text"
                            placeholder="Search by Username"
                            value={searchByUsername}
                            onChange={(e) => setSearchByUsername(e.target.value)}
                            className="px-4 py-2 border rounded mb-4 w-32"
                        /></th>
                        <th className="border-b text-left"> <input
                            type="text"
                            placeholder="Search by Email"
                            value={searchByEmail}
                            onChange={(e) => setSearchByEmail(e.target.value)}
                            className="px-4 py-2 border rounded mb-4 w-48"
                        /></th>
                        <th className="border-b text-left"> <input
                            type="text"
                            placeholder="Search by Phone"
                            value={searchByPhone}
                            onChange={(e) => setSearchByPhone(e.target.value)}
                            className="px-4 py-2 border rounded mb-4 w-48"
                        /></th>
                        <th className="border-b text-left"> <input
                            type="text"
                            placeholder="Search by Creation Date"
                            value={searchByCreationDate}
                            onChange={(e) => setSearchByCreationDate(e.target.value)}
                            className="px-4 py-2 border rounded mb-4 w-48"
                        /></th>
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
