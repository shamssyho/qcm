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
        <div className="header">
          <h1>QCM</h1>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/questionnaire" className={({ isActive }) => isActive ? 'active' : ''}>Questionnaire</NavLink>
            </li>
            <li>
              <NavLink to="/new-question" className={({ isActive }) => isActive ? 'active' : ''}>New question</NavLink>
            </li>
            <li>
              <NavLink to="/questions" className={({ isActive }) => isActive ? 'active' : ''}>Question</NavLink>
            </li>
            <li>
              <NavLink to="/stagiaires" className={({ isActive }) => isActive ? 'active' : ''}>Stagiaires</NavLink>
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
