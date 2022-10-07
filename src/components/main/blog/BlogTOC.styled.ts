import styled from 'styled-components';

interface TOCItemInterface {
  isSub: boolean;
}

const TOC = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  min-width: 200px;
  gap: 20px;
  letter-spacing: -0.5px;
  .toc-title {
    font-size: 21px;
    font-weight: 600;
    color: #222;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const TOCList = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ddd;
`;

const TOCItem = styled.div<TOCItemInterface>`
  line-height: 1.5;
  padding: 2px 8px;
  padding-left: ${(p) => (p.isSub ? '28px' : '12px')};
  font-size: 16px;
  color: #2a2a2a;
  cursor: pointer;
  @media (hover: hover) {
    :hover {
      opacity: 0.7;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { TOC, TOCList, TOCItem };
