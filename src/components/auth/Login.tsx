import useLogin from '../../hooks/auth/useLogin';

function Login() {
  const [idRef, pwRef, onLogin] = useLogin();
  onLogin();
  return <>asdf</>;
}

export default Login;
