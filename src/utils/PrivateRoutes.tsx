import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

const PrivateRoutes = () => {
  const isAuth = useSelector((store: RootState) => store.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
