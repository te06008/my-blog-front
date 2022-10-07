import { Helmet } from 'react-helmet-async';
import Styled from './Blog.styled';
import BlogComment from './BlogComment';
import BlogFooter from './BlogFooter';
import BlogTOC from './BlogTOC';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

function Blog() {
  return (
    <Styled.Blog>
      <Helmet>
        <title>Blog | 블로그 만들기</title>
      </Helmet>
      <Styled.BlogWrapper>
        <Styled.BlogContent>
          <ContentHeader />
          <ContentBody />
        </Styled.BlogContent>
        <BlogTOC />
      </Styled.BlogWrapper>
      <BlogFooter />
      <BlogComment />
    </Styled.Blog>
  );
}

export default Blog;
