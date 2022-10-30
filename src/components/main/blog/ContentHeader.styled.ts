import styled from 'styled-components';

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  line-height: 1;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  justify-content: center;
  gap: 20px;
  .content-header-tags {
    display: flex;
    gap: 12px;
    font-size: 14px;
    .tag-text {
      color: #ff5100;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .content-header-title {
    color: #454545;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -1px;
    @media (max-width: 1366px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  /* .content-header-subtitle {
    color: #454545;
    font-size: 21px;
    font-weight: 600;
    margin-top: -5px;
    letter-spacing: -1px;
  } */
  .content-header-date {
    display: flex;
    font-size: 14px;
    color: #828282;
    align-items: center;
    @media (max-width: 480px) {
      font-size: 12px;
    }
    .divider {
      height: 70%;
      width: 1px;
      background-color: #828282;
      margin: 2px 10px 0px 10px;
    }
    .content-header-icon {
      margin-right: 2px;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  .header-right-text {
    cursor: pointer;
    color: #2b2b2b;
    :hover {
      text-decoration: underline;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContentHeader, HeaderWrapper, HeaderLeft, HeaderRight };
