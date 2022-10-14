import { useEffect, useState } from 'react';
import getPreviewData from '../../../libs/getPreviewData';
import { HeaderDataInterface, TOCList } from '../../../types';

function useBlog({ isPreview }: { isPreview: boolean }) {
  const [tocList, setTocList] = useState<TOCList[]>([]);
  const [headerData, setHeaderData] = useState<HeaderDataInterface>({
    title: 'asdfasdfasdf',
    create_datetime: '',
    update_datetime: '',
    tags: [],
  });
  const [contentData, setContentData] = useState<any>('');

  useEffect(() => {
    if (isPreview) {
      const previewData = getPreviewData();
      const isoFormat = new Date().toISOString().replace('Z', '') + '000';
      const offset = -(new Date().getTimezoneOffset() / 60);
      const today = `${isoFormat}+0${offset}:00`;
      setHeaderData({
        title: previewData.title,
        create_datetime: today,
        update_datetime: today,
        tags: previewData.tags,
      });
      setContentData(previewData.content);
    }
  }, [isPreview]);

  return [tocList, setTocList, headerData, contentData] as [
    typeof tocList,
    typeof setTocList,
    typeof headerData,
    typeof contentData,
  ];
}
export default useBlog;
