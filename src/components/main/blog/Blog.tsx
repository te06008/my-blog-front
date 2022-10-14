import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import useBlog from '../../../hooks/main/useBlog/useBlog';
import Styled from './Blog.styled';
import BlogComment from './BlogComment';
import BlogFooter from './BlogFooter';
import BlogTOC from './BlogTOC';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

function Blog({ isPreview, ...rest }: { isPreview: boolean }) {
  const [tocList, setTocList, headerData, contentData] = useBlog({ isPreview });
  console.log(headerData, contentData);
  if (!contentData) return <div>로딩중..</div>;
  return (
    <Styled.Blog>
      <Helmet>
        <title>Blog | 블로그 만들기</title>
      </Helmet>
      <Styled.BlogWrapper>
        <Styled.BlogContent>
          <ContentHeader data={headerData} />
          <ContentBody data={contentData} setTocList={setTocList} />
        </Styled.BlogContent>
        <BlogTOC tocList={tocList} />
      </Styled.BlogWrapper>
      {!isPreview && <BlogFooter />}
      {!isPreview && <BlogComment />}
    </Styled.Blog>
  );
}

export default memo(Blog);
