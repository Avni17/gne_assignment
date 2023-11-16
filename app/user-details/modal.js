import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <head>        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <div className="bg-white p-8 rounded-lg shadow-lg text-black w-96 h-80">
                <div className="modal-content">
                    <i
                        className="modal-close-btn bg-rose-500 cursor-pointer relative right-[-18rem] top-[-0.5rem] z-50 fa fa-window-close"
                        style={{ color: 'red', fontSize: '2em' }}
                        onClick={onClose}
                    ></i>
                    {children}

                </div>
            </div>
        </div>
    );
};

export default Modal;
