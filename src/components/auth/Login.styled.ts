import styled from 'styled-components';

const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
`;
const Main = styled.div`
  width: 90vw;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { LoginPage, BackgroundVideo, Main, TitleLabel };
