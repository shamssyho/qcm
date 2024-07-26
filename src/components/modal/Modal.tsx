import React, { ReactNode } from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
                <div className="p-4">
                    {children}
                </div>
                <div className="flex justify-end p-4">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
