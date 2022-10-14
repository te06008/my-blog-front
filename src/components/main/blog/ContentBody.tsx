import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import useContentBody from '../../../hooks/main/useBlog/useContentBody';
import { TOCList } from '../../../types';
import Styled from './ContentBody.styled';

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
import { memo } from 'react';

function ContentBody({
  data,
  setTocList,
}: {
  data: any;
  setTocList: React.Dispatch<React.SetStateAction<TOCList[]>>;
}) {
  const [contentRef] = useContentBody({ setTocList });
  console.log(data);
  return (
    <Styled.ContentBody ref={contentRef}>
      <Viewer
        initialValue={data}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Styled.ContentBody>
  );
}

export default memo(ContentBody);
