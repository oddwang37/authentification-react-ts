import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from './redux/store';
import { checkAuth, getUserInfo } from './redux/authSlice';
import { SignIn, SignUp, MyProfile } from './pages';
import { Header } from './components';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuth());
    }
    let id = localStorage.getItem('id');
    if (id) {
      dispatch(getUserInfo(id));
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
    </div>
  );
};

export default App;
