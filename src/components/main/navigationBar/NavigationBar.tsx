import Styled from './NavigationBar.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import useNavigationBar from '../../../hooks/main/useNavigationBar/useNavigationBar';
import {
  DARK,
  isOsLightThemeAtom as isLightThemeAtom,
  LIGHT,
} from '../../../atoms/ThemeAtom';
import { useRecoilState } from 'recoil';
import ThemeMode from './ThemeMode';
import { memo } from 'react';
import { useLocation } from 'react-router';

function NavigationBar() {
  const [isMenuClick, onMenuClick, selectedMenu, onMenuItemClick] =
    useNavigationBar();
  const [isLight, setIsLight] = useRecoilState(isLightThemeAtom);
  const isLogin = window.sessionStorage.getItem('isLogin') === 'true';
  const location = useLocation();
  const menuList = isLogin
    ? [
        {
          text: 'Home',
          url: 'home',
        },
        {
          text: 'About Me',
          url: 'about',
        },
        {
          text: 'Log out',
          url: 'logout',
        },
      ]
    : [
        {
          text: 'Home',
          url: 'home',
        },
        {
          text: 'About Me',
          url: 'about',
        },
        {
          text: 'Log in',
          url: 'login',
        },
      ];
  return (
    <Styled.NavigationContainer>
      <Styled.Navigation>
        <Styled.NavigationTitle onClick={() => onMenuItemClick('/home')}>
          Te06008's Blog
        </Styled.NavigationTitle>
        <Styled.NavigationMenu>
          <div
            onClick={() => {
              const isBlog = location.pathname.split('/')[1] === 'blog';
              if (isBlog) {
                if (
                  window.confirm(
                    '이 페이지 새로고침 후에 테마가 적용됩니다. 새로고침 하시겠습니까?',
                  )
                ) {
                  const nextMode = isLight ? 'DARK' : 'LIGHT';
                  localStorage.setItem('theme', nextMode);
                  window.location.reload();
                }
                return;
              }
              setIsLight((s) => {
                localStorage.setItem('theme', !s ? LIGHT : DARK);
                return !s;
              });
            }}
          >
            <ThemeMode />
          </div>
          {menuList.map((item) => (
            <Styled.NavigationMenuItem
              selected={selectedMenu === item.url}
              key={item.url}
              onClick={() => onMenuItemClick(item.url)}
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
          {menuList.map((item) => (
            <Styled.MenuButtonItem
              selected={selectedMenu === item.url}
              key={item.text}
              onClick={() => onMenuItemClick(item.url)}
            >
              {item.text}
            </Styled.MenuButtonItem>
          ))}
        </Styled.MenuButtonList>
      )}
    </Styled.NavigationContainer>
  );
}

export default memo(NavigationBar);
