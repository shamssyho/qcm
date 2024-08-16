import { NavLink } from 'react-router-dom'
import Logout from '../Logout'

export default function Navbar() {
    return (

        <div className="bg-blue-600 p-0 text-white sticky top-0 z-10 shadow-md">
            <div className="bg-purple-700 p-4 text-white text-center">
                <h1 className="text-4xl font-bold">QCM</h1>
            </div>
            <div className="bg-gray-800 overflow-hidden">
                <ul className='list-none m-0 p-0 flex justify-center'>
                    <li className='float-left'>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/questionnaire"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Questionnaire</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new-question"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>New question</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/questions"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Question</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/stagiaires"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Stagiaires</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/question/stagiaire"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Questions stagiaire</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/results"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Results</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/results-final"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Results final</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                (isActive ? "bg-purple-700 text-white" : "text-white hover:bg-gray-200 hover:text-black") +
                                " block text-center px-5 py-3.5 text-decoration-none"
                            }><Logout /></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
