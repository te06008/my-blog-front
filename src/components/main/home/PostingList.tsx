import usePostingList from '../../../hooks/main/useHome/usePostingList';
import Styled from './PostingList.styled';
import Posts from './Posts';
import SideBar from './SideBar';

function PostingList() {
  const [
    selectedCategory,
    onCategoryClick,
    onCategoryDelete,
    isLoading,
    postList,
    scrollCallback,
    onQueryChange,
    onTagClick,
    searchBarRef,
  ] = usePostingList();
  return (
    <Styled.PostingList>
      <Styled.PostingListHeader>
        <div className="header-title">Recent Posts</div>
        <div className="header-selected-list">
          {selectedCategory !== 'All' && (
            <Styled.SelectedCategory onClick={onCategoryDelete}>
              {selectedCategory}
            </Styled.SelectedCategory>
          )}
        </div>
      </Styled.PostingListHeader>
      <Styled.PostingListBody>
        <Posts
          data={postList}
          scrollCallback={scrollCallback}
          onTagClick={onTagClick}
        />
        <SideBar
          onCategoryClick={onCategoryClick}
          onQueryChange={onQueryChange}
          searchBarRef={searchBarRef}
        />
      </Styled.PostingListBody>
    </Styled.PostingList>
  );
}

export default PostingList;
