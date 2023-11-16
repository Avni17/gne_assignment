import React, { useState, useEffect } from 'react';

const SearchInput = ({ label, value, onChange }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const handleInputClick = (e) => {
        e.stopPropagation(); // Prevent click on input from propagating to the parent
    };
    const toggleInputVisibility = () => {
        setIsInputVisible(!isInputVisible);
    };
    // State for column widths
    const [columnWidths, setColumnWidths] = useState({});

    // Effect to calculate column widths on component mount
    useEffect(() => {
        // Your logic to calculate column widths based on your styling and layout
        const widths = {
            ID: 'w-[8rem]',  // Adjust as needed
            Username: 'w-[12rem]',
            Email: 'w-[12rem]',
            Phone: 'w-[10rem]',
            CreationDate: 'w-40',
        };

        setColumnWidths(widths);
    }, []);

    // Function to set the width of the input based on the column
    const setInputWidth = (column) => {
        return columnWidths[column] || 'w-auto'; // Default width if not set
    };

    return (
        <th className="py-2 px-4 border-b text-left whitespace-nowrap" onClick={toggleInputVisibility}>
            {label} <br />
            {(
                <input
                    type="text"
                    placeholder={`Search by ${label}`}
                    value={value}
                    onChange={onChange}
                    className={`px-2 py-1 border rounded text-black ${setInputWidth(label)}`}
                    onClick={handleInputClick}
                />
            )}
        </th>
    );
};

export default SearchInput;
