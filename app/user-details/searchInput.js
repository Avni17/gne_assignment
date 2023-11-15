import React, { useState } from 'react';

const SearchInput = ({ label, value, onChange }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const handleInputClick = (e) => {
        e.stopPropagation(); // Prevent click on input from propagating to the parent
    };
    const toggleInputVisibility = () => {
        setIsInputVisible(!isInputVisible);
    };

    return (
        <th className="py-2 px-4 border-b text-left " onClick={toggleInputVisibility}>
            {label} <br />
            {(
                <input
                    type="text"
                    placeholder={`Search by ${label}`}
                    value={value}
                    onChange={onChange}
                    className={`px-2 py-1 border rounded text-black`}
                    onClick={handleInputClick}
                />
            )}
        </th>
    );
};

export default SearchInput;
