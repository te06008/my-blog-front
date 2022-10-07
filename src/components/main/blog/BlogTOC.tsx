import Styled from './BlogTOC.styled';
const tocList = [
  {
    text: 'An exhibit of Markdown',
    isSub: false,
  },
  {
    text: 'Basic formatting',
    isSub: false,
  },
  {
    text: 'Lists',
    isSub: false,
  },
  {
    text: 'Ordered list',
    isSub: true,
  },
  {
    text: 'Unordered list',
    isSub: true,
  },
  {
    text: 'Paragraph modifiers',
    isSub: false,
  },
  {
    text: 'Code block',
    isSub: true,
  },
  {
    text: 'Quote',
    isSub: true,
  },
];

function BlogTOC() {
  return (
    <Styled.TOC>
      <div className='toc-title'>목차</div>
      <Styled.TOCList>
        {tocList.map((content) => (
          <Styled.TOCItem isSub={content.isSub}>{content.text}</Styled.TOCItem>
        ))}
      </Styled.TOCList>
    </Styled.TOC>
  );
}

export default BlogTOC;
