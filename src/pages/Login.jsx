import ShowModalProvider from '../contexts/ShowModalContext';
import LoginPage from './Login/Login';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
function Login() {
  return (
    <div>
      <ShowModalProvider>
        <LoginPage />
      </ShowModalProvider>
    </div>
  );
}

export default Login;
