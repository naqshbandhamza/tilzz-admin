import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
//redux
import { Provider } from 'react-redux';
import { store } from './redux/state/store';
import "./App.css";

import Login from "./pages/registeration/Login";
import Profile from "./pages/profile/Profile";
import NotFound from "./components/common/NotFound";

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Login /></ProtectedRoute>} />
            <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
};

export default App;
