import Styled from './BlogComment.styled';
import { IoPersonCircleSharp } from 'react-icons/io5';
import CommentFormArea from './CommentFormArea';
import useBlogComment from '../../../hooks/main/useBlog/useBlogComment';
import dayjs from 'dayjs';
import Modal from '../../common/Modal';
import CommentDeleteModal from './CommentDeleteModal';

function BlogComment() {
  const [commentList, refetchCommentList, isModalOpen, onModalOpen] =
    useBlogComment();
  return (
    <Styled.BlogComment>
      <CommentFormArea
        count={commentList.length}
        refetch={refetchCommentList}
      />
      {commentList.length > 0 && (
        <Styled.CommentList>
          {commentList.map((comment) => (
            <Styled.CommentItem key={comment.id}>
              <div className="comment-item-header">
                <div className="comment-item-wrapper">
                  <IoPersonCircleSharp size="3em" className="person-icon" />
                  <div className="header-text">
                    <div className="username">
                      {comment.nickname || 'Anonymous User'}
                    </div>
                    <div className="date">
                      {dayjs(comment.created_at).format(
                        'YYYY년 MM월 DD일 a hh:mm',
                      )}
                    </div>
                  </div>
                </div>
                <div className="header-delete-btn" onClick={onModalOpen}>
                  삭제
                </div>
              </div>
              <p className="comment-item-body">{comment.comment}</p>
            </Styled.CommentItem>
          ))}
        </Styled.CommentList>
      )}
      {isModalOpen && (
        <Modal>
          <CommentDeleteModal />
        </Modal>
      )}
    </Styled.BlogComment>
  );
}

export default BlogComment;
