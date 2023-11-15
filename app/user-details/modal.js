import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-black w-96 h-80">
                <div className="modal-content">
                    <button className="modal-close-btn mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 relative right-[-17rem] z-50" onClick={onClose}>
                        Close
                    </button>
                    {children}

                </div>
            </div>
        </div>
    );
};

export default Modal;
