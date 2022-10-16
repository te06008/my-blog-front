import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

function useNavigationBar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const selectedMenu = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();

  const onMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const onMenuItemClick = (url: string) => {
    setIsMenuClicked(false);
    navigate(url);
  };

  return [isMenuClicked, onMenuClick, selectedMenu, onMenuItemClick] as [
    typeof isMenuClicked,
    typeof onMenuClick,
    typeof selectedMenu,
    typeof onMenuItemClick,
  ];
}

export default useNavigationBar;
