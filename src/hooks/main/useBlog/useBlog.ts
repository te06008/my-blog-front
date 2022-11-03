import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBlog } from '../../../libs/fetch';
import getPreviewData from '../../../libs/getPreviewData';
import { tagParser } from '../../../libs/tagParser';
import {
  FooterDataInterface,
  HeaderDataInterface,
  TOCList,
} from '../../../types';

function useBlog({ isPreview }: { isPreview: boolean }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tocList, setTocList] = useState<TOCList[]>([]);
  const [headerData, setHeaderData] = useState<HeaderDataInterface>({
    title: '',
    create_datetime: '',
    update_datetime: '',
    tags: [],
  });
  const [contentData, setContentData] = useState<string>('');
  const [footerData, setFooterData] = useState<FooterDataInterface>({
    next: {
      id: -1,
      title: '',
    },
    previous: {
      id: -1,
      title: '',
    },
    related_posts: [],
  });
  const { id } = useParams();

  const fetchBlog = useCallback(async () => {
    if (!id) return;
    const [isSuccess, data, msg] = await getBlog(id);
    if (isSuccess && data) {
      setHeaderData({
        title: data.title,
        create_datetime: data.created_at,
        update_datetime: data.updated_at,
        tags: tagParser(data.tags),
      });
      setContentData(data.content);
      setFooterData({
        next: data.next,
        previous: data.previous,
        related_posts: data.related_posts,
      });
    } else {
      alert(msg);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    if (isPreview) {
      const previewData = getPreviewData();
      const today = new Date().toISOString();
      setHeaderData({
        title: previewData.title,
        create_datetime: today,
        update_datetime: today,
        tags: previewData.tags,
      });
      setContentData(previewData.content);
      setIsLoading(false);
    } else {
      fetchBlog();
    }
  }, [fetchBlog, isPreview]);

  return [
    tocList,
    setTocList,
    isLoading,
    headerData,
    contentData,
    footerData,
    setIsLoading,
  ] as [
    typeof tocList,
    typeof setTocList,
    typeof isLoading,
    typeof headerData,
    typeof contentData,
    typeof footerData,
    typeof setIsLoading,
  ];
}
export default useBlog;
