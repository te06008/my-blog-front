import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getPostList } from '../../../libs/fetch';
import { PostingListModel } from '../../../models';
import _ from 'lodash';

function usePostingList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const selectedCategoryId = useRef<number>(
    window.sessionStorage.getItem('categoryId') !== null
      ? Number(window.sessionStorage.getItem('categoryId'))
      : -1,
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    window.sessionStorage.getItem('categoryName') !== null
      ? window.sessionStorage.getItem('categoryName')!
      : 'All',
  );
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
  const [postList, setPostList] = useState<PostingListModel[]>(
    postListData.current,
  );
  const query = useRef<string>('');
  const searchBarRef = useRef<HTMLInputElement>(null);

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
    window.sessionStorage.setItem(
      'categoryId',
      selectedCategoryId.current.toString(),
    );
    window.sessionStorage.setItem('categoryName', categoryName);
    fetchPostList();
  };

  const onCategoryDelete = () => {
    setSelectedCategory('All');
    window.sessionStorage.setItem('categoryName', 'All');
    postListData.current = [];
    pageNum.current = 1;
    selectedCategoryId.current = -1;
    fetchPostList();
  };

  const getSlicedContent = (list: PostingListModel[]): PostingListModel[] => {
    return list.map((item) => {
      const slice = item.content.split('\n');
      const maxLength = 140;
      let parsedStr = '';
      let flag = false;
      slice.forEach((str) => {
        if (parsedStr.length > maxLength) return;
        const getTrim = str.replaceAll(' ', '');
        if (getTrim.length === 0) return;
        const first = getTrim[0];
        if (first === '#' || first === '<' || first === '>') return;
        if (first === '`') {
          flag = !flag;
        }
        if (!flag && first !== '`') {
          if (parsedStr.length > 0) parsedStr += ' ';
          parsedStr += str;
        }
      });
      return {
        ...item,
        content: parsedStr.substring(0, maxLength),
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
      onQuerySearch();
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
  }, [fetchPostList]);

  // useEffect(() => {
  //   const scrollTop = Number(window.sessionStorage.getItem('scrollTop'));
  //   if (postList.length > 0 && scrollTop) {
  //     window.scrollTo({
  //       top: scrollTop,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [postList]);

  const resetData = () => {
    // window.sessionStorage.setItem(
    //   'scrollTop',
    //   document.documentElement.scrollTop.toString(),
    // );
    window.sessionStorage.removeItem('categoryId');
    window.sessionStorage.removeItem('categoryName');
    window.sessionStorage.removeItem('pageNum');
    window.sessionStorage.removeItem('isNextExist');
    window.sessionStorage.removeItem('post');
  };

  useEffect(() => {
    window.addEventListener('beforeunload', resetData);
    return () => {
      window.removeEventListener('beforeunload', resetData);
    };
  }, []);

  //디바운스 구현

  const onQuerySearch = () => {
    if (!postListData.current) return;
    const filteredList =
      query.current === ''
        ? postListData.current
        : postListData.current.filter(
            (post) =>
              post.title
                .replaceAll(' ', '')
                .toLowerCase()
                .includes(query.current.toLowerCase()) ||
              post.tags
                .replaceAll(' ', '')
                .toLowerCase()
                .includes(query.current.toLowerCase()),
          );
    setPostList(filteredList);
  };

  const queryDebounce = _.debounce((value) => {
    query.current = value;
    onQuerySearch();
  }, 300);

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    queryDebounce(e.target.value);
  };

  const onTagClick = (e: string) => {
    query.current = e;
    searchBarRef.current!.value = e;
    onQuerySearch();
  };

  return [
    selectedCategory,
    onCategoryClick,
    onCategoryDelete,
    isLoading,
    postList,
    scrollCallback,
    onQueryChange,
    onTagClick,
    searchBarRef,
  ] as [
    typeof selectedCategory,
    typeof onCategoryClick,
    typeof onCategoryDelete,
    typeof isLoading,
    typeof postList,
    typeof scrollCallback,
    typeof onQueryChange,
    typeof onTagClick,
    typeof searchBarRef,
  ];
}

export default usePostingList;
