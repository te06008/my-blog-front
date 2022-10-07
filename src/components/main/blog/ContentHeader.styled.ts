import styled from 'styled-components';

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  gap: 20px;
  line-height: 1;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  justify-content: center;
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
      margin-top: 2px;
      margin-right: 2px;
    }
  }
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContentHeader };
