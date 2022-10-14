import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function usePreview() {
  const navigate = useNavigate();

  const isAvailableAccess = () => {
    const previewData = window.localStorage.getItem('preview');
    if (!previewData) {
      //alert('잘못된 접근입니다.');
      //navigate('/home');
    }
  };

  useEffect(() => {
    isAvailableAccess();
    return () => {
      //window.localStorage.removeItem('preview');
    };
  }, []);
}

export default usePreview;
