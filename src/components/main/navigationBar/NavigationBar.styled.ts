import styled from 'styled-components';

interface MenuItemInterface {
  selected: boolean;
}

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-color: darkgray;
  color: #ffffff;
`;

const Navigation = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 300px;
  @media (max-width: 1600px) {
    padding: 0px 200px;
  }
  @media (max-width: 1366px) {
    padding: 0px 150px;
  }
  @media (max-width: 1024px) {
    padding: 0px 75px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const NavigationTitle = styled.div`
  cursor: pointer;
  font-size: 20px;
  @media (hover: hover) {
    :hover {
      transform: scale(1.1);
    }
  }
`;

const NavigationMenu = styled.div`
  display: flex;
  gap: 30px;
  .menu-icon {
    cursor: pointer;
    size: 2em;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .theme-icon {
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        transform: scale(1.3);
      }
    }
  }
`;

const NavigationMenuItem = styled.div<MenuItemInterface>`
  font-size: 18px;
  cursor: pointer;
  opacity: ${(p) => (p.selected ? '1' : '0.5')};
  @media (max-width: 767px) {
    display: none;
  }
  @media (hover: hover) {
    :hover {
      transform: scale(1.1);
    }
  }
`;

const MenuButtonList = styled.div`
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  min-width: 100vw;
  margin-top: -10px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuButtonItem = styled.div<MenuItemInterface>`
  padding: 10px 0px;
  cursor: pointer;
  opacity: ${(p) => (p.selected ? '1' : '0.5')};
  font-size: 18px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  NavigationContainer,
  Navigation,
  NavigationTitle,
  NavigationMenu,
  NavigationMenuItem,
  MenuButtonList,
  MenuButtonItem,
};
