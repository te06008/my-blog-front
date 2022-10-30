import { memo } from 'react';
import useLogin from '../../hooks/auth/useLogin';
import Styled from './LoginBox.styled';

function LoginBox() {
  const [idRef, pwRef, onLogin] = useLogin();

  return (
    <Styled.LoginBoxDiv>
      <form className='form-wrapper' onSubmit={onLogin}>
        <label className='form-title'>로그인</label>
        <div className='input-wrapper'>
          <input type='text' required ref={idRef} />
          <label className='input-title'>아이디</label>
        </div>
        <div className='input-wrapper'>
          <input type='password' required ref={pwRef} />
          <label className='input-title'>비밀번호</label>
        </div>
        <button className='login' type='submit'>
          로그인
        </button>
      </form>
    </Styled.LoginBoxDiv>
  );
}

export default memo(LoginBox);
