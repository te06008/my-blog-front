import styled from 'styled-components';

const Main = styled.div`
  min-height: 100vh;
  position: relative;
`;

const ScrollTopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  position: fixed;
  right: 60px;
  bottom: 48px;
  cursor: pointer;
  color: #454545;
  transition: 0.3s;
  border-radius: 32px;
  background: white;
  box-shadow: 0 2px 15px rgb(0 0 0 / 15%);
  opacity: 0;
  font-size: 24px;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    right: 30px;
    bottom: 24px;
    font-size: 18px;
  }
`;

const PostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  position: fixed;
  left: 60px;
  bottom: 48px;
  cursor: pointer;
  color: #454545;
  transition: 0.3s;
  border-radius: 32px;
  background: white;
  box-shadow: 0 2px 15px rgb(0 0 0 / 15%);
  font-size: 24px;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    left: 30px;
    bottom: 24px;
    font-size: 18px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Main, ScrollTopButton, PostButton };
