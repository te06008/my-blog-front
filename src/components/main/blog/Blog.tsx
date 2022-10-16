import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import useBlog from '../../../hooks/main/useBlog/useBlog';
import Spinner from '../../common/Spinner';
import Styled from './Blog.styled';
import BlogComment from './BlogComment';
import BlogFooter from './BlogFooter';
import BlogTOC from './BlogTOC';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

function Blog({ isPreview, ...rest }: { isPreview: boolean }) {
  const [tocList, setTocList, headerData, contentData] = useBlog({ isPreview });
  console.log(headerData, contentData);
  return (
    <Styled.Blog>
      <Helmet>
        <title>Te06008 | Blog</title>
      </Helmet>
      {headerData && contentData ? (
        <>
          <Styled.BlogWrapper>
            <Styled.BlogContent>
              <ContentHeader data={headerData} />
              <ContentBody data={contentData} setTocList={setTocList} />
            </Styled.BlogContent>
            <BlogTOC tocList={tocList} />
          </Styled.BlogWrapper>
          {!isPreview && <BlogFooter />}
          {!isPreview && <BlogComment />}
        </>
      ) : (
        <Spinner />
      )}
    </Styled.Blog>
  );
}

export default memo(Blog);
