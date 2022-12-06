import { Helmet } from 'react-helmet-async';
import Styled from './Home.styled';
import HomeBanner from './Banner';
import PostingList from './PostingList';

function Home() {
  return (
    <Styled.Home>
      <Helmet>
        <title>Te06008 | Home</title>
        <meta
          name="description"
          property="og:description"
          content="Blog Home"
        />
        <meta name="url" property="og:url" content={window.location.href} />
      </Helmet>
      <HomeBanner />
      <PostingList />
    </Styled.Home>
  );
}

export default Home;
