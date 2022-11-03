import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function usePreview() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAvailableAccess = useCallback(() => {
    const previewData = window.localStorage.getItem('preview');
    const isLogin = window.sessionStorage.getItem('isLogin');
    console.log(!previewData, isLogin === 'true');
    if (!previewData && (!isLogin || isLogin === 'false')) {
      alert('잘못된 접근입니다.');
      navigate('/home');
    } else {
      setIsLogin(true);
    }
  }, [navigate]);

  useEffect(() => {
    isAvailableAccess();
    return () => {
      window.localStorage.removeItem('preview');
    };
  }, [isAvailableAccess]);

  return [isLogin] as [typeof isLogin];
}

export default usePreview;
