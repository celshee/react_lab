import React from 'react';

const Modal = ({ cname, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-xl text-center">
                <h1 className="text-xl font-bold mb-4">{cname} is booked successfully!!</h1>
                <button
                    onClick={closeModal}
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
