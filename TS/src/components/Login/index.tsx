import { useEffect } from 'react';
import { useReducer } from 'react';

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: '',
  name: '',
};

type LoginPayload = {
  username: string;
  name: string;
};

type AuthAction =
  | {
      type: 'Logout';
    }
  | {
      type: 'Login';
      payload: LoginPayload;
    };

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'Logout':
      return {
        validating: false,
        name: '',
        token: '',
        username: '',
      };
    case 'Login':
      const {
        payload: { name, username },
      } = action;
      return {
        validating: false,
        token: 'ABC',
        name,
        username,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [{ validating, token, name }, dispatch] = useReducer(
    AuthReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'Logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'Login',
      payload: {
        name: 'Edgar',
        username: 'EAMZ',
      },
    });
  };

  const logout = () => {
    dispatch({ type: 'Logout' });
  };

  if (validating) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">
            User authenticated as {name}
          </div>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">Invalid credentials</div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
