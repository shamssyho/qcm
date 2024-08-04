import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/admin/Navbar';
import { AuthProvider } from './services/AuthProvider';
import Login from './pages/login/Login';
import AdminPage from './pages/admin/AdminPage';
import PrivateRoute from './pages/PrivateRoutes';
import Questionnaire from './pages/admin/Questionnaire';
import NewQuestion from './pages/admin/NewQuestion';
import ListeQuestions from './pages/admin/ListeQuestions';
import QuestionDetail from './pages/admin/QuestionDetails';
import ListeStagiaires from './pages/admin/ListeStagiaires';
import DetailsStagiaire from './pages/admin/DetailsStagiaire';
import QuestionPageStagiaire from './pages/quesstionStagiaire/QuestionStagiaire';
import Results from './pages/result/Results';
import ResultsPage from './pages/resultsPage/ResultsPage';
import DashboardPage from './pages/admin/DashboardPage';
import Unauthorized from './pages/Unauthorized';
import Error404 from './pages/Error404';
import ForgotPassword from './pages/ForgotPassword';
import QuestionnaireDetail from './pages/admin/QuestionnaireDetail';
import NewQuestionnaireForm from './components/newQuestionnaireForm/NewQuestionnaireForm';
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
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/new-question" element={<NewQuestion />} />
            <Route path="/questions" element={<ListeQuestions />} />
            <Route path="/questions/:id" element={<QuestionDetail />} />
            <Route path="/stagiaires" element={<ListeStagiaires />} />
            <Route path="/stagiaire/:id" element={<DetailsStagiaire />} />
            <Route path="/question/stagiaire" element={<QuestionPageStagiaire />} />
            <Route path="/results" element={<Results />} />
            <Route path="/results-final" element={<ResultsPage />} />
            <Route path="/questionnaire/:id" element={<QuestionnaireDetail />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
            <Route path="/new-questionnaire" element={<NewQuestionnaireForm />} />
            {/* <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} roles={['admin', 'manager']} />} /> */}
            <Route path="/dashboard" element=<DashboardPage /> />
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
