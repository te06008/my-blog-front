import { useNavigate, useParams } from 'react-router';
import { deleteBlog } from '../../../libs/fetch';
import { PostingListModel } from '../../../models';

function useContentHeader() {
  const { id } = useParams();
  const navigate = useNavigate();

  const onBlogDelete = async () => {
    if (!id) return;
    if (!window.confirm('정말로 삭제하시겠습니까?')) {
      return;
    }
    const [isSuccess, msg] = await deleteBlog(id);
    if (isSuccess) {
      const nowList: PostingListModel[] = JSON.parse(
        window.sessionStorage.getItem('post')!,
      );
      const NextList = nowList.filter((post) => post.id !== Number(id));
      window.sessionStorage.setItem('post', JSON.stringify(NextList));
      alert('성공적으로 삭제되었습니다.');
      navigate(-1);
    } else {
      alert(msg);
    }
  };

  return [onBlogDelete] as [typeof onBlogDelete];
}

export default useContentHeader;
