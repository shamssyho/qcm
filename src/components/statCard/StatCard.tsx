import React from 'react';

interface StatCardProps {
    title: string;
    value: number;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-2xl">{value}</p>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default StatCard;
