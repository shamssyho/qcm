import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/AuthProvider';
import Logout from '../Logout';

export default function Navbar() {
    const { user } = useAuth(); // Récupérer l'utilisateur connecté

    return (
        <div className="bg-blue-600 p-0 text-white sticky top-0 z-10 shadow-md">
            <div className="bg-purple-700 p-4 text-white text-center">
                <h1 className="text-4xl font-bold">QCM</h1>
            </div>
            <div className="bg-gray-800 overflow-hidden">
                <ul className='list-none m-0 p-0 flex justify-center'>
                    {user?.role === 'admin' && (
                        <>
                            <li className='float-left'>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/questionnaire"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Questionnaires
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/questions"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Questions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/stagiaires"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Stagiaires
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/results-final"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Results Final
                                </NavLink>
                            </li>
                        </>
                    )}

                    {user?.role === 'stagiaire' && (
                        <>
                            <li>
                                <NavLink
                                    to="/stagiaire-questionnaire"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Mes Questionnaires
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/results"
                                    className={({ isActive }) =>
                                        (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                        " block text-center px-5 py-3.5 text-decoration-none"
                                    }
                                >
                                    Mes Résultats
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Logout button */}
                    {user && (
                        <li className='float-left'>
                            <button
                                onClick={Logout}
                                className="text-white hover:bg-gray-200 hover:text-black block text-center px-5 py-3.5 text-decoration-none"
                            >
                                Déconnexion
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
