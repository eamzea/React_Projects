import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
import logo from 'assets/logo.svg';
import { routes } from './routes';
import { Suspense, useId } from 'react';
import { Loading } from 'components';

const Router = () => {
  const id = useId()

  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(route => (
                <li key={id + route.name}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(route => (
              <Route
                path={route.path}
                element={<route.Component />}
                key={id + route.name}
              />
            ))}
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
