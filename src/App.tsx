import { NavLink, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Questionnaire from './pages/questionnaire/Questionnaire';
import NewQuestion from './pages/newQuestion/NewQuestion';
import ListeQuestions from './pages/listeQuestions/ListeQuestions';
import QuestionDetail from './pages/questionDetails/QuestionDetails';
import ListeStagiaires from './pages/listeStagiaires/ListeStagiaires';
import DetailsStagiaire from './pages/detailsStagiaire/DetailsStagiaire';
import QuestionPageStagiaire from './pages/quesstionStagiaire/QuestionStagiaire';
import Results from './pages/result/Results';
import ResultsPage from './pages/resultsPage/ResultsPage';
import DashboardPage from './pages/dashboard/DashboardPage';

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
        <Route path="/question/stagiaire" element={<QuestionPageStagiaire />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results-final" element={<ResultsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>

    </div>
  )
}

export default App;
