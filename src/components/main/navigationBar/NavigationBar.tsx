import Styled from './NavigationBar.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import useNavigationBar from '../../../hooks/main/useNavigationBar/useNavigationBar';
import { useNavigate } from 'react-router';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const menuList = [
  {
    text: 'Home',
    url: 'home',
  },
  {
    text: 'About Me',
    url: 'about',
  },
  {
    text: 'Login',
    url: 'login',
  },
];

function NavigationBar() {
  const [isMenuClick, onMenuClick, selectedMenu] = useNavigationBar();
  const navigate = useNavigate();

  return (
    <Styled.NavigationContainer>
      <Styled.Navigation>
        <Styled.NavigationTitle onClick={() => navigate('/home')}>
          Tech Blog
        </Styled.NavigationTitle>
        <Styled.NavigationMenu>
          <MdLightMode className="theme-icon" size="1.4em" />
          {menuList.map((item, key) => (
            <Styled.NavigationMenuItem
              selected={selectedMenu === item.url}
              key={item.text}
              onClick={() => navigate(`/${item.url}`)}
            >
              {item.text}
            </Styled.NavigationMenuItem>
          ))}
          <AiOutlineMenu
            onClick={onMenuClick}
            className="menu-icon"
            size="1.4em"
          />
        </Styled.NavigationMenu>
      </Styled.Navigation>
      {isMenuClick && (
        <Styled.MenuButtonList>
          {menuList.map((item, key) => (
            <Styled.MenuButtonItem
              selected={selectedMenu === item.url}
              key={item.text}
              onClick={() => navigate(`/${item.url}`)}
            >
              {item.text}
            </Styled.MenuButtonItem>
          ))}
        </Styled.MenuButtonList>
      )}
    </Styled.NavigationContainer>
  );
}

export default NavigationBar;
