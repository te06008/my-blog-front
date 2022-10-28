import Styled from './SideBar.styled';
import { IoIosSearch } from 'react-icons/io';
import useSideBar from '../../../hooks/main/useHome/useSideBar';

function SideBar({
  onCategoryClick,
}: {
  onCategoryClick: (categoryName: string, categoryId: number) => void;
}) {
  const [categoryList] = useSideBar();
  //검색내용 디바운스 구현 필요
  return (
    <Styled.SideBar>
      <Styled.SearchBar>
        <IoIosSearch size="1.5em" />
        <input type="text" placeholder="제목, 내용, 태그등" />
      </Styled.SearchBar>
      <Styled.CategoryBar>
        {categoryList.map((category) => (
          <Styled.CategoryMenu
            key={category.id}
            onClick={() => onCategoryClick(category.category_name, category.id)}
          >
            <div className="categorymenu-text">{category.category_name}</div>
            <div className="categorymenu-number">{category.count}</div>
          </Styled.CategoryMenu>
        ))}
      </Styled.CategoryBar>
    </Styled.SideBar>
  );
}

export default SideBar;
