import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { deleteCategory, postCategory, putCategory } from '../../../libs/fetch';
import { CategoryListModel } from '../../../models';

function useCategoryEditModal() {
  const menuList = useMemo(() => ['추가', '수정', '삭제'], []);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const onMenuClick = (e: number) => {
    if (selected === e) return;
    setSelected(e);
  };

  const onSubmit = (callback: Function) => {
    callback();
    setTrigger(false);
  };

  return [menuList, selected, onMenuClick, trigger, setTrigger, onSubmit] as [
    typeof menuList,
    typeof selected,
    typeof onMenuClick,
    typeof trigger,
    typeof setTrigger,
    typeof onSubmit,
  ];
}

function useCategoryAdd({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (e: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const textRef = useRef<HTMLInputElement>(null);

  const getFormData = () => {
    const categoryName = textRef.current?.value ? textRef.current.value : '';
    return [categoryName] as [typeof categoryName];
  };

  const isFormValid = useCallback(
    (categoryName: string) => {
      const isBlank = !categoryName;
      const isDuple =
        categoryList.findIndex(
          (category) => category.category_name === categoryName,
        ) !== -1;
      return !isBlank && !isDuple;
    },
    [categoryList],
  );

  const onPostCategory = useCallback(
    async (categoryName: string) => {
      const [isSuccess, msg] = await postCategory(categoryName);
      if (isSuccess) {
        alert('성공적으로 추가되었습니다.');
        refetch();
        onClose();
      } else {
        alert(msg);
      }
    },
    [onClose, refetch],
  );

  const onConfirm = useCallback(() => {
    const [categoryName] = getFormData();
    if (isFormValid(categoryName)) {
      onSubmit(() => onPostCategory(categoryName));
    } else {
      alert('올바른 카테고리 이름이 아닙니다.');
      onSubmit(() => true);
    }
  }, [isFormValid, onPostCategory, onSubmit]);

  useEffect(() => {
    if (trigger && textRef.current) {
      onConfirm();
    }
  }, [onConfirm, trigger]);

  return [textRef] as [typeof textRef];
}

function useCategoryModify({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (e: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const getFormData = () => {
    const categoryId = selectRef.current?.value ? selectRef.current.value : '';
    const categoryName = textRef.current?.value ? textRef.current.value : '';
    return [categoryId, categoryName] as [
      typeof categoryId,
      typeof categoryName,
    ];
  };

  const isFormValid = useCallback(
    (categoryId: string, categoryName: string) => {
      const isBlank = !categoryId || !categoryName;
      const isDuple =
        categoryList.findIndex(
          (category) => category.category_name === categoryName,
        ) !== -1;
      return !isBlank && !isDuple;
    },
    [categoryList],
  );

  const onPutCategory = useCallback(
    async (categoryId: string, categoryName: string) => {
      const [isSuccess, msg] = await putCategory(categoryId, categoryName);
      if (isSuccess) {
        alert('성공적으로 수정되었습니다.');
        refetch();
        onClose();
      } else {
        alert(msg);
      }
    },
    [onClose, refetch],
  );

  const onConfirm = useCallback(() => {
    const [categoryId, categoryName] = getFormData();
    if (isFormValid(categoryId, categoryName)) {
      onSubmit(() => onPutCategory(categoryId, categoryName));
    } else {
      alert('올바른 카테고리 이름이 아닙니다.');
      onSubmit(() => true);
    }
  }, [isFormValid, onPutCategory, onSubmit]);

  useEffect(() => {
    if (trigger && textRef.current && selectRef.current) {
      onConfirm();
    }
  }, [onConfirm, trigger]);

  return [selectRef, textRef] as [typeof selectRef, typeof textRef];
}

function useCategoryDelete({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (e: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const getFormData = () => {
    const categoryId = selectRef.current?.value ? selectRef.current.value : '';
    return [categoryId] as [typeof categoryId];
  };

  const isFormValid = useCallback((categoryId: string) => {
    const isBlank = !categoryId;
    return !isBlank;
  }, []);

  const onDeleteCategory = useCallback(
    async (categoryId: string) => {
      const [isSuccess, msg] = await deleteCategory(categoryId);
      if (isSuccess) {
        alert('성공적으로 삭제되었습니다.');
        refetch();
        onClose();
      } else {
        alert(msg);
      }
    },
    [onClose, refetch],
  );

  const onConfirm = useCallback(() => {
    const [categoryId] = getFormData();
    if (isFormValid(categoryId)) {
      onSubmit(() => onDeleteCategory(categoryId));
    } else {
      alert('올바른 카테고리 이름이 아닙니다.');
      onSubmit(() => true);
    }
  }, [isFormValid, onDeleteCategory, onSubmit]);

  useEffect(() => {
    if (trigger && selectRef.current) {
      onConfirm();
    }
  }, [onConfirm, trigger]);

  return [selectRef] as [typeof selectRef];
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useCategoryEditModal,
  useCategoryAdd,
  useCategoryModify,
  useCategoryDelete,
};
