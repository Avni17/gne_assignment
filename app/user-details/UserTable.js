'use client';
import userData from '../../public/database/users.json';
import React, { useState, useEffect } from 'react';
import Report from './report'
import Modal from './modal';
import SearchInput from './searchInput';

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
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        console.log(row);
        setSelectedRow(row);
        console.log(selectedRow);
        setIsModalOpen(!isModalOpen);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold mb-4">User Details</h1>
                <input
                    type="text"
                    placeholder="Search all Columns"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2 border rounded mb-4 overflow-hidden"
                />
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                {/* Pass selectedRow to the Report component */}
                {selectedRow && <Report selectedRow={selectedRow} />}
            </Modal>
            <div className="overflow-x-auto">
                <table className="border-2 rounded border-gray-200 bg-white" >
                    <thead className="">
                        <tr>
                            <SearchInput label="ID" value={searchById} onChange={(e) => setSearchById(e.target.value)} />
                            <SearchInput label="Username" value={searchByUsername} onChange={(e) => setSearchByUsername(e.target.value)} />
                            <SearchInput label="Email" value={searchByEmail} onChange={(e) => setSearchByEmail(e.target.value)} />
                            <SearchInput label="Phone" value={searchByPhone} onChange={(e) => setSearchByPhone(e.target.value)} />
                            <SearchInput
                                label="Creation Date"
                                value={searchByCreationDate}
                                onChange={(e) => setSearchByCreationDate(e.target.value)}
                            />
                        </tr>
                    </thead>
                    <tbody className="">
                        {filteredUsers.length > 0 ? filteredUsers.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`${index % 2 === 0 ? 'bg-gray-50	' : 'bg-white'} hover:bg-green-100 hover:text-black cursor-pointer`}
                                onClick={() => handleRowClick(user)}
                            >
                                <td className="py-2 px-4 border-b whitespace-nowrap overflow-hidden">{user.id}</td>
                                <td className="py-2 px-4 border-b whitespace-nowrap overflow-hidden">{user.username}</td>
                                <td className="py-2 px-4 border-b whitespace-nowrap overflow-hidden">{user.email}</td>
                                <td className="py-2 px-4 border-b whitespace-nowrap overflow-hidden">{user.phone}</td>
                                <td className="py-2 px-4 border-b whitespace-nowrap overflow-hidden">{user.creationDate}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 border-b text-center text-gray-200">
                                    No results
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default UserDetails;
