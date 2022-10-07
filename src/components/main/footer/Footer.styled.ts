import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  color: white;
  font-weight: 500;
  font-size: 16px;
  .footer-row {
    display: flex;
    .footer-icon {
      margin-right: 5px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Footer };
