import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import Styled from './Login.styled';
import LoginBox from './LoginBox';

function Login() {
  const navigate = useNavigate();
  return (
    <Styled.LoginPage>
      <Helmet>
        <title>Login | Te06008's Blog</title>
      </Helmet>

      <Styled.BackgroundVideo src='./bg.mp4' autoPlay muted loop />
      <Styled.Main>
        <LoginBox />
        <Styled.TitleLabel onClick={() => navigate('/home')}>
          Te06008's Blog
          <br /> <br />
          게으른 개발자의 블로그
        </Styled.TitleLabel>
      </Styled.Main>
    </Styled.LoginPage>
  );
}

export default Login;
