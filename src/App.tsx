import { NavLink, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Questionnaire from './pages/questionnaire/Questionnaire';
import NewQuestion from './pages/newQuestion/NewQuestion';
import ListeQuestions from './pages/listeQuestions/ListeQuestions';
import QuestionDetail from './pages/questionDetails/QuestionDetails';
import ListeStagiaires from './pages/listeStagiaires/ListeStagiaires';
import DetailsStagiaire from './pages/detailsStagiaire/DetailsStagiaire';

function App() {

  return (
    <div>
      <div>
        <div className="bg-purple-700 p-4 text-white text-center">
          <h1>QCM</h1>
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
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/new-question" element={<NewQuestion />} />
        <Route path="/questions" element={<ListeQuestions />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/stagiaires" element={<ListeStagiaires />} />
        <Route path="/stagiaire/:id" element={<DetailsStagiaire />} />

      </Routes>

    </div>
  )
}

export default App;
