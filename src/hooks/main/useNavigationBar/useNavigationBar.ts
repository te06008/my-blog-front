import { useState } from 'react';
import { useLocation } from 'react-router';

function useNavigationBar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const selectedMenu = useLocation().pathname.split('/')[1];

  const onMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return [isMenuClicked, onMenuClick, selectedMenu] as [
    typeof isMenuClicked,
    typeof onMenuClick,
    typeof selectedMenu,
  ];
}

export default useNavigationBar;
