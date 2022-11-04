import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { postLogin } from '../../libs/fetch';

const successMsg = '환영합니다';

function useLogin() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const getFormData = () => {
    const id = !idRef.current ? '' : idRef.current.value;
    const pw = !pwRef.current ? '' : pwRef.current.value;
    return [id, pw] as [typeof id, typeof pw];
  };

  const isFormValid = ({ id, pw }: { id: string; pw: string }) => {
    const idRegEx = /^[\w.@+-]+$/;
    const pwRegEx = /^[\w`~!@#$%^&*()-=+]{8,}$/;
    return idRegEx.test(id) && pwRegEx.test(pw);
  };

  const fetchUserLogin = async ({ id, pw }: { id: string; pw: string }) => {
    const [isSuccess, data, errMsg] = await postLogin({ id, pw });
    if (isSuccess) {
      if (data.includes(successMsg)) {
        window.sessionStorage.setItem('isLogin', 'true');
        window.sessionStorage.setItem('username', id);
        const isPrevious =
          window.sessionStorage.getItem('isPrevious') === 'true';
        isPrevious ? navigate(-1) : navigate('/home');
      } else {
        alert('아이디 혹은 비밀번호가 틀렸습니다.');
      }
    } else {
      alert(errMsg);
    }
  };

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [id, pw] = getFormData();
    if (!isFormValid({ id, pw })) {
      alert('아이디 혹은 비밀번호가 비었거나 올바른 입력이 아닙니다.');
      return;
    }
    fetchUserLogin({ id, pw });
  };

  return [idRef, pwRef, onLogin] as [
    typeof idRef,
    typeof pwRef,
    typeof onLogin,
  ];
}

export default useLogin;
