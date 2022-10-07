import usePostingList from '../../../hooks/main/useHome/usePostingList';
import Styled from './PostingList.styled';
import Posts from './Posts';
import SideBar from './SideBar';

function PostingList() {
  const [selectedCategories, onCategoryAdd, onCategoryDelete] =
    usePostingList();

  return (
    <Styled.PostingList>
      <Styled.PostingListHeader>
        <div className="header-title">Recent Posts</div>
        <div className="header-selected-list">
          {selectedCategories.map((category) => (
            <Styled.SelectedCategory
              key={category}
              onClick={() => onCategoryDelete(category)}
            >
              {category}
            </Styled.SelectedCategory>
          ))}
        </div>
      </Styled.PostingListHeader>
      <Styled.PostingListBody>
        <Posts />
        <SideBar onCategoryAdd={onCategoryAdd} />
      </Styled.PostingListBody>
    </Styled.PostingList>
  );
}

export default PostingList;
