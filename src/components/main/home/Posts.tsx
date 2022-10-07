import Styled from './Posts.styled';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';
const dummy = {
  id: 12,
  title: 'Welcome to Blog!',
  create_date: 'Dec 07, 2018',
  update: 'About 1 min',
  body: 'You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated. To add new posts, simply add a file in the _posts dire...',
  category: ['PS', 'React', 'JavaScript'],
};

function Posts() {
  const navigate = useNavigate();
  return (
    <Styled.Posts>
      {[0, 1, 2, 3, 4, 5].map((post, key) => (
        <Styled.PostWrapper key={key}>
          <Styled.PostHeader>
            <div
              className="post-header-title"
              // onClick={() => navigate(`/blog/${dummy.id}`)}
            >
              {dummy.title}
            </div>
            <div className="post-header-date">
              <BiCalendar size="1.2em" className="post-header-icon" />
              {dummy.create_date}
              <div className="divider" />
              <AiOutlineClockCircle size="1.2em" className="post-header-icon" />
              {dummy.update}
            </div>
          </Styled.PostHeader>
          <Styled.PostBody
            onClick={() => navigate(`/blog/${dummy.id}`)}
          >{`${dummy.body} Read More`}</Styled.PostBody>
          <Styled.PostCategory>
            {dummy.category.map((category) => (
              <div
                className="category-decoration"
                key={category}
              >{`#${category}`}</div>
            ))}
          </Styled.PostCategory>
        </Styled.PostWrapper>
      ))}
    </Styled.Posts>
  );
}

export default Posts;
