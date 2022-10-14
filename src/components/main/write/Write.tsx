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

function Write() {
  const [titleRef, contentRef, categoryRef, tagRef, onPreview, onSubmit] =
    useWrite();
  return (
    <Styled.Write>
      <Styled.Title>글쓰기</Styled.Title>
      <Styled.TitleInput
        ref={titleRef}
        type="text"
        placeholder="제목을 입력해 주세요"
      />
      <Editor
        ref={contentRef}
        previewStyle="vertical"
        previewHighlight={false}
        initialValue=" "
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
      <Styled.CategorySelect ref={categoryRef} defaultValue="">
        <option value="" disabled>
          카테고리를 선택해 주세요.
        </option>
        <option value="일상">일상</option>
      </Styled.CategorySelect>
      <Styled.TagInput
        ref={tagRef}
        type="text"
        placeholder="태그 입력(#필요없이 ,로 구분)"
      />
      <Styled.ButtonWrapper>
        <button className="preview-btn" onClick={onPreview}>
          미리보기
        </button>
        <button className="submit-btn" onClick={onSubmit}>
          확인
        </button>
      </Styled.ButtonWrapper>
    </Styled.Write>
  );
}

export default Write;
