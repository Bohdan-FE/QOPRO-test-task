import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { RestrictedRoute } from '../Routes/RestrictedRoutes';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout/SharedLayout';

const UserPage = lazy(() => import('../../pages/User/UserPage'));

const MainPage = lazy(() => import('../../pages/Main/MainPage'));

function App() {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<RestrictedRoute redirectTo='/user' component={<MainPage />} />}></Route>
        <Route path='/user' element={<PrivateRoute redirectTo='/' component={<UserPage />} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
