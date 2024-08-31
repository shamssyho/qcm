import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar';
import { AuthProvider } from './services/AuthProvider';
import Login from './pages/login/Login';
import AdminPage from './pages/admin/AdminPage';
import PrivateRoute from './pages/PrivateRoutes';
import Questionnaire from './pages/admin/questionnaire/Questionnaire';
import NewQuestion from './pages/admin/question/NewQuestion';
import ListeQuestions from './pages/admin/question/ListeQuestions';
import QuestionDetail from './pages/admin/question/QuestionDetails';
import ListeStagiaires from './pages/admin/stagiaire/ListeStagiaires';
import DetailsStagiaire from './pages/admin/stagiaire/DetailsStagiaire';
import QuestionPageStagiaire from './pages/stagiaire/QuestionStagiaire';
import Results from './pages/stagiaire/Results';
import ResultsPage from './pages/stagiaire/ResultsPage';
import DashboardPage from './pages/admin/DashboardPage';
import Unauthorized from './pages/Unauthorized';
import Error404 from './pages/Error404';
import ForgotPassword from './pages/ForgotPassword';
import QuestionnaireDetail from './pages/admin/questionnaire/QuestionnaireDetail';
import NewQuestionnaireForm from './pages/admin/questionnaire/NewQuestionnaireForm';
import { QuestionProvider } from './services/QuestionContext';
import Home from './pages/Home';
import QuestionnairePage from './pages/stagiaire/QuestionnairePage';
import QuestionnaireStagiaire from './pages/stagiaire/QuestionnaireStagiaire';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <AuthProvider>
        <QuestionProvider>
          <Navbar />
          {/* Navbar should be conditionally rendered depending on the role */}
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Error404 />} />

            {/* Admin-specific Routes */}
            <Route path="/admin" element={<PrivateRoute element={AdminPage} roles={['ROLE_ADMIN']} />} />
            <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} roles={['ROLE_ADMIN']} />} />
            <Route path="/questionnaire" element={<PrivateRoute element={Questionnaire} roles={['ROLE_ADMIN']} />} />
            <Route path="/questionnaire/:id" element={<PrivateRoute element={QuestionnaireDetail} roles={['ROLE_ADMIN']} />} />
            <Route path="/new-questionnaire" element={<PrivateRoute element={NewQuestionnaireForm} roles={['ROLE_ADMIN']} />} />
            <Route path="/new-question/:id" element={<PrivateRoute element={NewQuestion} roles={['ROLE_ADMIN']} />} />
            <Route path="/questions" element={<PrivateRoute element={ListeQuestions} roles={['ROLE_ADMIN']} />} />
            <Route path="/questions/:id" element={<PrivateRoute element={QuestionDetail} roles={['ROLE_ADMIN']} />} />
            <Route path="/stagiaires" element={<PrivateRoute element={ListeStagiaires} roles={['ROLE_ADMIN']} />} />
            <Route path="/stagiaire/:id" element={<PrivateRoute element={DetailsStagiaire} roles={['ROLE_ADMIN']} />} />

            {/* Stagiaire-specific Routes */}
            <Route path="/results" element={<PrivateRoute element={Results} roles={['ROLE_STAGIAIRE']} />} />
            <Route path="/results-final" element={<PrivateRoute element={ResultsPage} roles={['ROLE_STAGIAIRE']} />} />
            <Route path="/stagiaire-questionnaire" element={<PrivateRoute element={QuestionnairePage} roles={['ROLE_STAGIAIRE']} />} />
            <Route path="/questionnaire/:id_questionnaire/questions" element={<PrivateRoute element={QuestionPageStagiaire} roles={['ROLE_STAGIAIRE']} />} />
          </Routes>


        </QuestionProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
