import Styled from './SideBar.styled';
import { IoIosSearch } from 'react-icons/io';

const menuList = ['All', 'React', 'JavaScript', 'PS', '일상'];
function SideBar({
  onCategoryAdd,
}: {
  onCategoryAdd: (category: string) => void;
}) {
  //검색내용 디바운스 구현 필요
  return (
    <Styled.SideBar>
      <Styled.SearchBar>
        <IoIosSearch size="1.5em" />
        <input type="text" placeholder="제목, 내용, 태그등" />
      </Styled.SearchBar>
      <Styled.CategoryBar>
        {menuList.map((category) => (
          <Styled.CategoryMenu
            key={category}
            onClick={() => onCategoryAdd(category)}
          >
            <div className="categorymenu-text">{category}</div>
            <div className="categorymenu-number">{14}</div>
          </Styled.CategoryMenu>
        ))}
      </Styled.CategoryBar>
    </Styled.SideBar>
  );
}

export default SideBar;
