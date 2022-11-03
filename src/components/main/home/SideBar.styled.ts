import styled from 'styled-components';

const SideBar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;
  height: 100%;
  @media (max-width: 1024px) {
    position: static;
  }
  @media (max-width: 1366px) {
    min-width: 200px;
  }
`;

const SearchBar = styled.div`
  box-sizing: border-box;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.35);
  border-radius: 5px;
  height: 45px;
  width: 100%;
  input[type='text'] {
    margin-top: 2px;
    font-size: 18px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: ${(p) => p.theme.color.searchBar};
    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${(p) => p.theme.color.placeholder};
    }
  }
`;

const CategoryBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryMenu = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(211, 211, 211);
  @media (hover: hover) {
    :hover {
      cursor: pointer;
      transition: 0.5s;
      background-color: rgba(211, 211, 211, 0.35);
    }
  }
  .categorymenu-text {
    color: ${(p) => p.theme.color.categoryMenu};
    font-size: 14px;
  }
  .categorymenu-number {
    display: inline-block;
    font-size: 11px;
    border-radius: 10px;
    color: ${(p) => p.theme.color.categoryCard};
    background: ${(p) => p.theme.backgroundColor.categoryCard};
    padding: 0px 8px;
    align-self: center;
    line-height: 1.6;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { SideBar, SearchBar, CategoryBar, CategoryMenu };
