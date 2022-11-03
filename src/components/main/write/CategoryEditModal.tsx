import { memo, useCallback } from 'react';
import Hooks from '../../../hooks/main/useWrite/useCategoryEditModal';
import { CategoryListModel } from '../../../models';
import Styled from './CategoryEditModal.styled';

function CategoryAdd({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (callback: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const [textRef] = Hooks.useCategoryAdd({
    trigger,
    onSubmit,
    categoryList,
    refetch,
    onClose,
  });
  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <label htmlFor="categoryName">Name</label>
        <input
          ref={textRef}
          type="text"
          id="categoryName"
          placeholder="추가할 카테고리명"
        />
      </Styled.InputBox>
    </Styled.Wrapper>
  );
}

function CategoryModify({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (callback: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const [selectRef, textRef] = Hooks.useCategoryModify({
    trigger,
    onSubmit,
    categoryList,
    refetch,
    onClose,
  });
  return (
    <Styled.Wrapper>
      <select ref={selectRef} defaultValue="">
        <option value="" disabled>
          카테고리를 선택해 주세요.
        </option>
        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>
      <Styled.InputBox>
        <label htmlFor="categoryName">Name</label>
        <input
          type="text"
          id="categoryName"
          placeholder="변경할 카테고리명"
          ref={textRef}
        />
      </Styled.InputBox>
    </Styled.Wrapper>
  );
}

function CategoryDelete({
  trigger,
  onSubmit,
  categoryList,
  refetch,
  onClose,
}: {
  trigger: boolean;
  onSubmit: (callback: Function) => void;
  categoryList: CategoryListModel[];
  refetch: Function;
  onClose: Function;
}) {
  const [selectRef] = Hooks.useCategoryDelete({
    trigger,
    onSubmit,
    categoryList,
    refetch,
    onClose,
  });
  return (
    <Styled.Wrapper>
      <select defaultValue="" ref={selectRef}>
        <option value="" disabled>
          카테고리를 선택해 주세요.
        </option>
        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>
    </Styled.Wrapper>
  );
}

function CategoryEditModal({
  onClose,
  categoryList,
  refetch,
}: {
  onClose: () => void;
  categoryList: CategoryListModel[];
  refetch: Function;
}) {
  const [menuList, selected, onMenuClick, trigger, setTrigger, onSubmit] =
    Hooks.useCategoryEditModal();
  const componentsRouter = useCallback(
    (e: number) => {
      switch (e) {
        case 0:
          return (
            <CategoryAdd
              trigger={trigger}
              onSubmit={onSubmit}
              categoryList={categoryList}
              refetch={refetch}
              onClose={onClose}
            />
          );
        case 1:
          return (
            <CategoryModify
              trigger={trigger}
              onSubmit={onSubmit}
              categoryList={categoryList}
              refetch={refetch}
              onClose={onClose}
            />
          );
        case 2:
          return (
            <CategoryDelete
              trigger={trigger}
              onSubmit={onSubmit}
              categoryList={categoryList}
              refetch={refetch}
              onClose={onClose}
            />
          );
        default:
          return <></>;
      }
    },
    [categoryList, onClose, onSubmit, refetch, trigger],
  );
  return (
    <Styled.CategoryEditModal>
      <Styled.ModalBody>
        <div className="title">카테고리 편집</div>
        <Styled.Menu>
          {menuList.map((menuItem, index) => (
            <Styled.MenuItem
              selected={selected === index}
              onClick={() => onMenuClick(index)}
            >
              {menuItem}
            </Styled.MenuItem>
          ))}
        </Styled.Menu>
        {componentsRouter(selected)}
      </Styled.ModalBody>
      <Styled.ModalFooter>
        <button className="close-btn" onClick={onClose}>
          취소
        </button>
        <button className="submit-btn" onClick={() => setTrigger(true)}>
          확인
        </button>
      </Styled.ModalFooter>
    </Styled.CategoryEditModal>
  );
}

export default memo(CategoryEditModal);
