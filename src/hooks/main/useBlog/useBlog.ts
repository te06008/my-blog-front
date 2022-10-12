import { useState } from 'react';
import { TOCList } from '../../../types';

function useBlog() {
  const [tocList, setTocList] = useState<TOCList[]>([]);
  return [tocList, setTocList] as [typeof tocList, typeof setTocList];
}
export default useBlog;
