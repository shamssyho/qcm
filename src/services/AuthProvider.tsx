import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
    user: { username: string; role: string } | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const fakeUsers = [
    { username: 'admin@example.com', password: 'admin', role: 'admin' },
    { username: 'stagiaire@example.com', password: 'stagiaire', role: 'stagiaire' },
    { username: 'alann@exemple.com', password: 'alann', role: 'stagiaire' },
];

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{ username: string; role: string } | null>(null);
    const navigate = useNavigate();

    /* const login = (username: string, password: string) => {
        const foundUser = fakeUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser({ username: foundUser.username, role: foundUser.role });
            if (foundUser.role === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/stagiaire-dashboard');
            }
        } else {
            alert('Identifiants incorrects');
        }
    }; */

    const logout = () => {
        setUser(null);
        navigate('/login'); // assurez-vous que cette route est correctement configurée dans vos routes
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:3030/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }

            const data = await response.json();
            console.log("DATA : ", data);
            console.log("DATA Role: ", data.role);
            
            setUser({ email: data.email, role: data.role });

            if (data.role === 'ROLE_ADMIN') {
                navigate('/dashboard');
            } else if (data.role === 'ROLE_STAGIAIRE') {
                navigate('/stagiaire-questionnaire');
            }
        } catch (error) {
            alert('Identifiants incorrects');
            console.error('Login error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
