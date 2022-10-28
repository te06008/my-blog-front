import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { deleteComment, getCommentList } from '../../../libs/fetch';
import { CommentListModel } from '../../../models';

function useBlogComment() {
  const { id } = useParams();
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

  const onDeleteComment = async (commentId: number) => {};

  const onModalOpen = () => {
    setIsModalOpen(true);
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

  return [commentList, refetchCommentList, isModalOpen, onModalOpen] as [
    typeof commentList,
    typeof refetchCommentList,
    typeof isModalOpen,
    typeof onModalOpen,
  ];
}

export default useBlogComment;
