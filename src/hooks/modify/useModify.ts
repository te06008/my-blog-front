import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getBlog, getCertificaiton } from '../../libs/fetch';
import { BlogData } from '../../types';

function useModify() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState<BlogData>();

  const fetchBlogData = useCallback(async () => {
    const [isSuccess, data, msg] = await getBlog(id!);
    if (isSuccess && data) {
      setBlogData({
        id: data.id,
        category_id: data.category_id,
        title: data.title,
        content: data.content,
        tags: data.tags,
      });
    } else {
      alert(msg);
      navigate('/home');
    }
  }, [id, navigate]);

  const fetchCertification = useCallback(async () => {
    const username = window.sessionStorage.getItem('username');
    if (!username) {
      alert('접근 권한이 없습니다.');
      navigate('/home');
      return;
    }
    const [isSuccess, data, msg] = await getCertificaiton({ username });
    if (isSuccess) {
      fetchBlogData();
    } else {
      alert(msg);
      navigate('home');
      return;
    }
  }, [fetchBlogData, navigate]);

  useEffect(() => {
    if (id) {
      fetchCertification();
    }
  }, [fetchCertification, id]);

  return [blogData] as [typeof blogData];
}

export default useModify;
