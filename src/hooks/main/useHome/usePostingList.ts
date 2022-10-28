import { useCallback, useEffect, useRef, useState } from 'react';
import { getPostList } from '../../../libs/fetch';
import { PostingListModel } from '../../../models';

function usePostingList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const pageNum = useRef<number>(
    window.sessionStorage.getItem('pageNum') !== null
      ? Number(window.sessionStorage.getItem('pageNum'))
      : 1,
  );
  const isNextExist = useRef<boolean>(
    window.sessionStorage.getItem('isNextExist') !== null
      ? window.sessionStorage.getItem('isNextExist') === 'true'
      : true,
  );
  const postListData = useRef<PostingListModel[]>(
    window.sessionStorage.getItem('post') !== null
      ? JSON.parse(window.sessionStorage.getItem('post')!)
      : [],
  );
  const selectedCategoryId = useRef<number>(-1);
  const [postList, setPostList] = useState<PostingListModel[]>(
    postListData.current,
  );

  const onCategoryClick = (categoryName: string, categoryId: number) => {
    if (selectedCategory === categoryName) return;
    setSelectedCategory(categoryName);
    postListData.current = [];
    pageNum.current = 1;
    if (categoryName === 'All') {
      selectedCategoryId.current = -1;
    } else {
      selectedCategoryId.current = categoryId;
    }
    fetchPostList();
  };

  const onCategoryDelete = () => {
    setSelectedCategory('All');
    postListData.current = [];
    pageNum.current = 1;
    selectedCategoryId.current = -1;
    fetchPostList();
  };

  const getSlicedContent = (list: PostingListModel[]): PostingListModel[] => {
    return list.map((item) => {
      return {
        ...item,
        content: item.content.substr(0, 30),
      };
    });
  };

  const fetchPostList = useCallback(async () => {
    const queryString =
      selectedCategoryId.current === -1
        ? `page=${pageNum.current}&`
        : `page=${pageNum.current}&category_id=${selectedCategoryId.current}`;
    const [isSuccess, data, msg] = await getPostList({ queryString });
    isNextExist.current = data?.next !== null ? true : false;
    if (isSuccess && data) {
      const parsedList = getSlicedContent(data.results);
      postListData.current = postListData.current.concat(parsedList);
      setPostList(postListData.current);
      window.sessionStorage.setItem('pageNum', pageNum.current.toString());
      window.sessionStorage.setItem(
        'isNextExist',
        isNextExist.current.toString(),
      );
      window.sessionStorage.setItem(
        'post',
        JSON.stringify(postListData.current),
      );
    } else {
      alert(msg);
    }
    setIsLoading(false);
  }, []);

  const scrollCallback = () => {
    if (isNextExist.current) {
      pageNum.current++;
      fetchPostList();
    }
  };

  useEffect(() => {
    if (postListData.current.length === 0) {
      fetchPostList();
    } else {
      setPostList(postListData.current);
      setIsLoading(false);
    }
    return () => {
      console.log('asdf');
    };
  }, [fetchPostList]);

  return [
    selectedCategory,
    onCategoryClick,
    onCategoryDelete,
    isLoading,
    postList,
    scrollCallback,
  ] as [
    typeof selectedCategory,
    typeof onCategoryClick,
    typeof onCategoryDelete,
    typeof isLoading,
    typeof postList,
    typeof scrollCallback,
  ];
}

export default usePostingList;
