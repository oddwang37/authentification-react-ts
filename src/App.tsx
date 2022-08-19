import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch } from './redux/store';
import { checkAuth, getUserInfo } from './redux/authSlice';
import { SignIn, SignUp, MyProfile } from './pages';
import { Header } from './components';
import PrivateRoutes from './utils/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      dispatch(checkAuth());
      const { userId } = JSON.parse(window.atob(token.split('.')[1]));
      console.log(userId);
      dispatch(getUserInfo(userId));
    }
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MyProfile />} />
        </Route>
        <Route path="/" element={<MyProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;
