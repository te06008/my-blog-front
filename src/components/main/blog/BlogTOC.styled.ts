import styled from 'styled-components';

interface TOCItemInterface {
  isSub: boolean;
}

const TOC = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  max-width: 250px;
  gap: 20px;
  letter-spacing: -0.5px;
  height: 100%;
  .toc-title {
    font-size: 21px;
    font-weight: 600;
    color: ${(p) => p.theme.color.tocTitle};
  }
  @media (max-width: 1366px) {
    display: none;
  }
`;

const TOCList = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ddd;
`;

const TOCItem = styled.a<TOCItemInterface>`
  line-height: 1.5;
  padding: 2px 8px;
  padding-left: ${(p) => (p.isSub ? '28px' : '12px')};
  font-size: 16px;
  color: ${(p) => p.theme.color.tocText};
  cursor: pointer;
  text-decoration: none;
  @media (hover: hover) {
    :hover {
      opacity: 0.7;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { TOC, TOCList, TOCItem };
