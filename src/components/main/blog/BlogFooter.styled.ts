import styled from 'styled-components';

interface NavigatorItemInterface {
  isVisible: boolean;
}

const BlogFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 40px;
  width: calc(100% - 280px);
  @media (max-width: 1366px) {
    min-width: 100%;
  }
`;

const FooterNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px -8px;
`;

const NavigatorItem = styled.div<NavigatorItemInterface>`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  color: #666;
  .navigator-item-text {
    font-size: 16px;
    @media (hover: hover) {
      :hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

const RelatedPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .posts-title {
    color: #333;
    font-size: 20px;
    margin-bottom: 16px;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 17px;
    }
  }
  .posts-item {
    line-height: 1.6;
    display: flex;
    align-items: center;
    color: #666;
    font-size: 15px;
    gap: 8px;
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { BlogFooter, FooterNavigator, NavigatorItem, RelatedPosts };
