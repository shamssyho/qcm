import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar';
import { AuthProvider } from './services/AuthProvider'
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
import { QuestionsProvider } from './services/QuestionContext';
function App() {

  return (
    <div className='bg-gray-100 min-h-screen'>

      <Navbar />
      <AuthProvider>
        <QuestionsProvider>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<PrivateRoute element={AdminPage} roles={['admin']} />} />
            <Route path="/questionnaire" element={<PrivateRoute element={Questionnaire} roles={['admin']} />} />
            <Route path="/new-question" element={<PrivateRoute element={NewQuestion} roles={['admin']} />} />
            <Route path="/questions" element={<PrivateRoute element={ListeQuestions} roles={['admin']} />} />
            <Route path="/questions/:id" element={<PrivateRoute element={QuestionDetail} roles={['admin']} />} />
            <Route path="/stagiaires" element={<PrivateRoute element={ListeStagiaires} roles={['admin']} />} />
            <Route path="/stagiaire/:id" element={<PrivateRoute element={DetailsStagiaire} roles={['admin']} />} />
            <Route path="/question/stagiaire" element={<QuestionPageStagiaire />} />
            <Route path="/results" element={<Results />} />
            <Route path="/results-final" element={<ResultsPage />} />
            <Route path="/questionnaire/:id" element={<PrivateRoute element={QuestionnaireDetail} roles={['admin']} />} />
            <Route path="/question/:id" element={<PrivateRoute element={QuestionDetail} roles={['admin']} />} />
            <Route path="/new-questionnaire" element={<PrivateRoute element={NewQuestionnaireForm} roles={['admin']} />} />
            <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} roles={['admin']} />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </QuestionsProvider>

      </AuthProvider>

    </div>
  )
}

export default App;
