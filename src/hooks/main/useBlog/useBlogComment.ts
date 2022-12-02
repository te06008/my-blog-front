import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { deleteComment, getCommentList } from '../../../libs/fetch';
import { CommentListModel } from '../../../models';

function useBlogComment() {
  const { id } = useParams();
  const selectedCommentId = useRef<number>(-1);
  const isRefetch = useRef<boolean>(false);
  const [commentList, setCommentList] = useState<CommentListModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchCommentList = useCallback(async () => {
    if (!id) return;
    const [isSuccess, data, msg] = await getCommentList(id);
    if (isSuccess) {
      setCommentList(data);
    } else {
      alert(msg);
    }
  }, [id]);

  const refetchCommentList = () => {
    isRefetch.current = true;
    fetchCommentList();
  };

  const onDeleteComment = async (password: string) => {
    if (!selectedCommentId.current || selectedCommentId.current === -1) {
      alert('새로고침후 다시 시도해 주세요.');
      return;
    }
    const [isSuccess, msg] = await deleteComment(
      selectedCommentId.current,
      password,
    );
    if (isSuccess) {
      alert('삭제되었습니다.');
      fetchCommentList();
      onModalClose();
    } else {
      alert(msg);
    }
  };

  const onModalOpen = (commentId: number) => {
    const isLogin = window.sessionStorage.getItem('isLogin') === 'true';
    selectedCommentId.current = commentId;
    if (isLogin && window.confirm('정말로 삭제하시겠습니까?')) {
      onDeleteComment('');
      return;
    }
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCommentList();
  }, [fetchCommentList]);

  useEffect(() => {
    if (isRefetch.current === true && commentList.length > 0) {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
      isRefetch.current = false;
    }
  }, [commentList]);

  return [
    commentList,
    refetchCommentList,
    isModalOpen,
    onModalOpen,
    onModalClose,
    onDeleteComment,
  ] as [
    typeof commentList,
    typeof refetchCommentList,
    typeof isModalOpen,
    typeof onModalOpen,
    typeof onModalClose,
    typeof onDeleteComment,
  ];
}

export default useBlogComment;
