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

function ContentBody({
  setTocList,
}: {
  setTocList: React.Dispatch<React.SetStateAction<TOCList[]>>;
}) {
  const markdown = `## c++ 코드 사용해보기
  
  c++ 코드를 작성해 보겠습니다.

  ### main.cpp

  <br />
  \`\`\`cpp
  #include <stdio.h>
  using namespace std;
  int main(){
    int n;
    cin >> n;
    cout << n;
    return 0;
  }
  \`\`\`
  
  `;

  const [contentRef] = useContentBody({ setTocList });
  return (
    <Styled.ContentBody ref={contentRef}>
      <Viewer
        initialValue={markdown}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Styled.ContentBody>
  );
}

export default ContentBody;
