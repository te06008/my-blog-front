import useBlogTOC from '../../../hooks/main/useBlog/useBlogToc';
import { TOCList } from '../../../types';
import Styled from './BlogTOC.styled';

function BlogTOC({ tocList }: { tocList: TOCList[] }) {
  const [tocRef] = useBlogTOC();

  return (
    <Styled.TOC ref={tocRef}>
      <div className="toc-title">목차</div>
      <Styled.TOCList>
        {tocList.map((content) => (
          <Styled.TOCItem isSub={content.isTabbed} href={`#${content.id}`}>
            {content.text}
          </Styled.TOCItem>
        ))}
      </Styled.TOCList>
    </Styled.TOC>
  );
}

export default BlogTOC;
