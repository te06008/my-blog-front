import { useState } from 'react';

function usePostingList() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategoryAdd = (category: string) => {
    if (selectedCategories.indexOf(category) !== -1) {
      return;
    }
    if (selectedCategories.length === 3) {
      alert('카테고리는 최대 3개까지만 선택가능합니다.');
      return;
    }
    setSelectedCategories(selectedCategories.concat(category));
  };

  const onCategoryDelete = (category: string) => {
    if (selectedCategories.indexOf(category) === -1) {
      return;
    }
    setSelectedCategories(
      selectedCategories.filter((categoryItem) => categoryItem !== category),
    );
  };

  return [selectedCategories, onCategoryAdd, onCategoryDelete] as [
    typeof selectedCategories,
    typeof onCategoryAdd,
    typeof onCategoryDelete,
  ];
}

export default usePostingList;
