import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useAppDispatch } from './redux/store';
import { checkAuth, getUserInfo } from './redux/authSlice';
import { SignIn, SignUp, MyProfile } from './pages';
import { Header } from './components';
import PrivateRoutes from './utils/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuth());
      // Получаем id из localStorage полученного после регистрации
      // чтобы получить информацию о пользователе
      let id = localStorage.getItem('id');
      if (id) {
        dispatch(getUserInfo(id));
      } else {
        toast.error('Ошибка получения данных пользователя');
      }
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
