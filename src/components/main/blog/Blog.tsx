import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useBlog from '../../../hooks/main/useBlog/useBlog';
import Styled from './Blog.styled';
import BlogComment from './BlogComment';
import BlogFooter from './BlogFooter';
import BlogTOC from './BlogTOC';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

function Blog() {
  const [tocList, setTocList] = useBlog();
  return (
    <Styled.Blog>
      <Helmet>
        <title>Blog | 블로그 만들기</title>
      </Helmet>
      <Styled.BlogWrapper>
        <Styled.BlogContent>
          <ContentHeader />
          <ContentBody setTocList={setTocList} />
        </Styled.BlogContent>
        <BlogTOC tocList={tocList} />
      </Styled.BlogWrapper>
      <BlogFooter />
      <BlogComment />
    </Styled.Blog>
  );
}

export default Blog;
