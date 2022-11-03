import Styled from './Write.styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';

// Languages for Highlighting;
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-css-extras';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import useWrite from '../../../hooks/main/useWrite/useWrite';
import { BiEdit } from 'react-icons/bi';
import Modal from '../../common/Modal';
import CategoryEditModal from './CategoryEditModal';
import { BlogData } from '../../../types';

function Write({
  isModify,
  modifyData,
}: {
  isModify: boolean;
  modifyData?: BlogData;
}) {
  const [
    titleRef,
    contentRef,
    categoryRef,
    tagRef,
    onPreview,
    onSubmit,
    categoryList,
    isModalOpen,
    onCategoryEditClick,
    onModalClose,
    fetchCategoryList,
  ] = useWrite(isModify);
  return (
    <Styled.Write>
      <Styled.Title>{isModify ? '글 수정' : '글 쓰기'}</Styled.Title>
      <Styled.TitleInput
        ref={titleRef}
        type="text"
        placeholder="제목을 입력해 주세요"
        defaultValue={isModify ? modifyData!.title : ''}
      />
      <Editor
        ref={contentRef}
        previewStyle="vertical"
        previewHighlight={false}
        initialValue={isModify ? modifyData!.content : ' '}
        height="60vh"
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        plugins={[
          [codeSyntaxHighlight, { highlighter: Prism }],
          [
            colorSyntax,
            // 기본 색상 preset 적용
            {
              preset: ['#1F2E3D', '#4c5864', '#ED7675'],
            },
          ],
        ]}
      />
      <Styled.CategoryWrapper>
        <Styled.CategorySelect
          ref={categoryRef}
          defaultValue={isModify ? modifyData!.category_id : ''}
        >
          <option value="" disabled>
            카테고리를 선택해 주세요.
          </option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category_name}
            </option>
          ))}
        </Styled.CategorySelect>
        <BiEdit className="icon" onClick={onCategoryEditClick} />
      </Styled.CategoryWrapper>
      <Styled.TagInput
        ref={tagRef}
        type="text"
        placeholder="태그 입력(#필요없이 ,로 구분)"
        defaultValue={isModify ? modifyData!.tags : ''}
      />
      <Styled.ButtonWrapper>
        <button className="preview-btn" onClick={onPreview}>
          미리보기
        </button>
        <button className="submit-btn" onClick={onSubmit}>
          확인
        </button>
      </Styled.ButtonWrapper>
      {isModalOpen && (
        <Modal>
          <CategoryEditModal
            onClose={onModalClose}
            categoryList={categoryList}
            refetch={fetchCategoryList}
          />
        </Modal>
      )}
    </Styled.Write>
  );
}

export default Write;
