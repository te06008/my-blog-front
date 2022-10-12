import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import useContentBody from '../../../hooks/main/useBlog/useContentBody';
import { TOCList } from '../../../types';
import Styled from './ContentBody.styled';

function ContentBody({
  setTocList,
}: {
  setTocList: React.Dispatch<React.SetStateAction<TOCList[]>>;
}) {
  const markdown = `## Te06008의 블로그 만들기 - Front편

  이 프로젝트는 React + TypeScript로 제작하였다.
  
  ### 디자인
  
  기본적으로 참고한 디자인은 [여기](https://jeffreytse.github.io/jekyll-theme-yat/)이다.
  
  ## 메뉴
  
  메뉴는 Home, About Me, Login, 테마 총 4개의 탭으로 구성되어 있다.\
  탭에 존재하지 않는 페이지는 내용 클릭했을 때 보이는 화면과 글쓰기 페이지가 있다.
  
  ### 목적
  
  블로그를 만드는 이유는 내가 공부했던 것들을 정리해 두기 위함
  
  ## 기타
  
  회원가입은 만들생각이 없다. (나만 글쓸거임 ㅋㅋ)`;

  const [contentRef] = useContentBody({ setTocList });
  return (
    <Styled.ContentBody ref={contentRef}>
      <Viewer initialValue={markdown} />
    </Styled.ContentBody>
  );
}

export default ContentBody;
