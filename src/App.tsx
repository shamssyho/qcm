import { Route, Routes } from 'react-router-dom';
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
import PrivateRoute from './pages/PrivateRoutes';
import AdminPage from './pages/AdminPage';
import Unauthorized from './pages/Unauthorized';
import { AuthProvider } from './services/AuthProvider';
import Error404 from './pages/Error404';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './pages/Navbar';

function App() {

  return (
    <div className='bg-gray-100 min-h-screen'>

      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute element={AdminPage} roles={['admin']} />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/new-question" element={<NewQuestion />} />
          <Route path="/questions" element={<ListeQuestions />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/stagiaires" element={<ListeStagiaires />} />
          <Route path="/stagiaire/:id" element={<DetailsStagiaire />} />
          <Route path="/question/stagiaire" element={<QuestionPageStagiaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results-final" element={<ResultsPage />} />
          {/* <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} roles={['admin', 'manager']} />} /> */}
          <Route path="/dashboard" element=<DashboardPage /> />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App;
