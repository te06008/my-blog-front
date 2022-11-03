import Styled from './BlogComment.styled';
import { IoPersonCircleSharp } from 'react-icons/io5';
import CommentFormArea from './CommentFormArea';
import useBlogComment from '../../../hooks/main/useBlog/useBlogComment';
import dayjs from 'dayjs';
import Modal from '../../common/Modal';
import CommentDeleteModal from './CommentDeleteModal';

function BlogComment() {
  const [
    commentList,
    refetchCommentList,
    isModalOpen,
    onModalOpen,
    onModalClose,
    onDeleteComment,
  ] = useBlogComment();
  return (
    <Styled.BlogComment>
      <CommentFormArea
        count={commentList.length}
        refetch={refetchCommentList}
      />

      <Styled.CommentList>
        {commentList.length > 0 &&
          commentList.map((comment, index) => (
            <Styled.CommentItem
              key={comment.id}
              isEnd={commentList.length - 1 === index}
            >
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
                <div
                  className="header-delete-btn"
                  onClick={() => onModalOpen(comment.id)}
                >
                  삭제
                </div>
              </div>
              <pre className="comment-item-body">{comment.comment}</pre>
            </Styled.CommentItem>
          ))}
      </Styled.CommentList>
      {isModalOpen && (
        <Modal>
          <CommentDeleteModal
            onClose={onModalClose}
            onConfirm={onDeleteComment}
          />
        </Modal>
      )}
    </Styled.BlogComment>
  );
}

export default BlogComment;
