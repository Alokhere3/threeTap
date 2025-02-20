import { Route, Routes, Navigate } from 'react-router-dom';
import FloatingShape from './components/FloatingShape.jsx';

import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import EmailVerificationPage from './pages/EmailVerificationPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import HomePage from './pages/HomePage.jsx';

import LoadingSpinner from './components/LoadingSpinner.jsx';

import {Toaster} from 'react-hot-toast';
import { useAuthStore } from './store/authStore.js';
import { useEffect } from 'react';

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
  if(user){
	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/home' replace />;
	}
}

	return children;
};

function App() {
  const {isCheckingAuth, checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <LoadingSpinner/>;
  }
  
  return (
    <div className="min-h-screen bg-[#EFEAE3] flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-[#B37865]" size="w-80 h-80" top="-5%" left="10%" delay={2}/>
      <FloatingShape color="bg-[#B37865]" size="w-80 h-80" top="10%" left="50%" delay={3}/>
      <FloatingShape color="bg-[#B37865]" size="w-40 h-40" top="40%" left="-10%" delay={2}/>

      <Routes>
        <Route
					path='/'
					element={
            <RedirectAuthenticatedUser>
              <DashboardPage/>
            </RedirectAuthenticatedUser>
							
					}
				/>
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/setting" 
          element={
            <ProtectedRoute>
              <SettingsPage/>
            </ProtectedRoute>
            
          } 
        />
        <Route 
          path="/signup" 
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route 
          path="/login" 
          element={
            <RedirectAuthenticatedUser>
              <LoginPage/>
            </RedirectAuthenticatedUser>
        } 
        />
        <Route path="/verify-email" element={<EmailVerificationPage/>} />
        <Route 
          path="/forgot-password" 
          element={
				  		<RedirectAuthenticatedUser>
				  			<ForgotPasswordPage />
				  		</RedirectAuthenticatedUser>
				  }
        />

        <Route 
        path='/reset-password/:token'
        element={
          <RedirectAuthenticatedUser>
            <ResetPasswordPage/>
          </RedirectAuthenticatedUser>
        }
        />
        {/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Toaster/>


    </div>
  )
}

export default App
