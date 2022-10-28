import { useCallback, useEffect, useState } from 'react';
import { getCategoryList } from '../../../libs/fetch';
import { CategoryListModel } from '../../../models';

function useSideBar() {
  const [categoryList, setCategoryList] = useState<CategoryListModel[]>([
    {
      id: -1,
      category_name: 'All',
      count: 0,
    },
  ]);

  const fetchCategoryList = useCallback(async () => {
    const [isSuccess, data, msg] = await getCategoryList();
    if (isSuccess) {
      const totalCount = data
        .map((arr) => arr.count)
        .reduce((sum, arr) => sum + arr);
      const newCategoryList = categoryList;
      newCategoryList[0].count = totalCount;
      setCategoryList(() => newCategoryList.concat(data));
    } else {
      alert(msg);
    }
  }, []);

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);

  return [categoryList] as [typeof categoryList];
}

export default useSideBar;
