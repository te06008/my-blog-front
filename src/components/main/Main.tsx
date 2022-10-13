import { Outlet, useNavigate } from 'react-router';
import Styled from './Main.styled';
import NavigationBar from './navigationBar/NavigationBar';
import { BsPencilSquare } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';
import useScrollToggle from '../../hooks/main/useScrollToggle';
import Footer from './footer/Footer';
function Main() {
  const [scrollBtnRef, moveToTop] = useScrollToggle();
  const navigate = useNavigate();
  return (
    <Styled.Main>
      <NavigationBar />
      <Outlet />
      <Styled.ScrollTopButton onClick={moveToTop} ref={scrollBtnRef}>
        <FaArrowUp />
      </Styled.ScrollTopButton>
      <Styled.PostButton onClick={() => navigate('/write')}>
        <BsPencilSquare />
      </Styled.PostButton>
      <Footer />
    </Styled.Main>
  );
}

export default Main;
