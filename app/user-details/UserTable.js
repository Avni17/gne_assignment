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
            <h1>User Details</h1>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={handleSearch}
            />

<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead className="bg-black-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">ID</th>
        <th className="border border-gray-300 px-4 py-2">Username</th>
        <th className="border border-gray-300 px-4 py-2">Email</th>
        <th className="border border-gray-300 px-4 py-2">Phone</th>
        <th className="border border-gray-300 px-4 py-2">Creation Date</th>
      </tr>
    </thead>
    <tbody>
      {filteredUsers.map((user) => (
        <tr key={user.id} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">{user.id}</td>
          <td className="border border-gray-300 px-4 py-2">{user.username}</td>
          <td className="border border-gray-300 px-4 py-2">{user.email}</td>
          <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
          <td className="border border-gray-300 px-4 py-2">{user.creationDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
    );
};

export default UserDetails;
