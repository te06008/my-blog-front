import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { logoutRequest } from '../../../libs/fetch';

function useNavigationBar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const selectedMenu = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();

  const onMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const fetchLogout = async () => {
    const [isSuccess, msg] = await logoutRequest();
    window.sessionStorage.removeItem('isLogin');
    window.location.reload();
  };

  const onMenuItemClick = (url: string) => {
    switch (url) {
      case 'logout':
        fetchLogout();
        break;
      default:
        setIsMenuClicked(false);
        navigate(url);
        break;
    }
  };

  useEffect(() => {
    window.sessionStorage.setItem('isPrevious', 'true');
  }, []);

  return [isMenuClicked, onMenuClick, selectedMenu, onMenuItemClick] as [
    typeof isMenuClicked,
    typeof onMenuClick,
    typeof selectedMenu,
    typeof onMenuItemClick,
  ];
}

export default useNavigationBar;
