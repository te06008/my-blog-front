import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import {
  getCategoryList,
  getCertificaiton,
  postBlog,
  putBlog,
} from '../../../libs/fetch';
import { CategoryListModel } from '../../../models';

function useWrite(isModify: boolean) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<any>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const [categoryList, setCategoryList] = useState<CategoryListModel[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getFormData = () => {
    const title = !titleRef.current ? '' : titleRef.current.value;
    const content = !contentRef.current
      ? ''
      : contentRef.current?.getInstance().getMarkdown();
    const category = !categoryRef.current ? '' : categoryRef.current.value;
    const tag = !tagRef.current ? '' : tagRef.current.value;

    return [title, content, category, tag] as [
      typeof title,
      typeof content,
      typeof category,
      typeof tag,
    ];
  };

  const onCategoryEditClick = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onFormRequired = ({
    title,
    content,
    category,
    tag,
  }: {
    title: string;
    content: string;
    category: string;
    tag: string;
  }) => {
    const parsedContent = content
      .toString()
      .replace(/\n/g, '')
      .replace(/\s*/g, '');
    const isTagRequired = tag.indexOf('#');
    if (title && parsedContent && category && isTagRequired === -1) return true;
    return false;
  };

  const onPreview = () => {
    const [title, content, category, tag] = getFormData();
    const previewJson = JSON.stringify({
      title: title,
      content: content,
      category: category,
      tags: tag,
    });
    window.localStorage.setItem('preview', previewJson);

    window.open('http://localhost:3000/preview', '_blank');
    const getpreview = window.localStorage.getItem('preview');

    if (getpreview) {
      console.log(JSON.parse(getpreview));
    }
  };

  const onPostBlog = async ({
    title,
    content,
    category,
    tag,
  }: {
    title: string;
    content: string;
    category: string;
    tag: string;
  }) => {
    const [isSuccess, msg] = await postBlog({ title, content, category, tag });
    if (isSuccess) {
      alert('작성에 성공하였습니다.');
      navigate('/home');
    } else {
      alert(msg);
    }
  };

  const onPutBlog = async ({
    title,
    content,
    category,
    tag,
  }: {
    title: string;
    content: string;
    category: string;
    tag: string;
  }) => {
    if (!id) return;
    const [isSuccess, msg] = await putBlog({
      id,
      title,
      content,
      category,
      tag,
    });
    if (isSuccess) {
      alert('수정에 성공하였습니다.');
      navigate('/home');
    } else {
      alert(msg);
    }
  };

  const onSubmit = () => {
    const [title, content, category, tag] = getFormData();
    if (!onFormRequired({ title, content, category, tag })) {
      alert('모든 정보를 입력하지 않았거나 양식이 올바르지 않습니다.');
      return;
    }
    if (isModify) {
      onPutBlog({ title, content, category, tag });
    } else {
      onPostBlog({ title, content, category, tag });
    }
  };

  const isCertified = useCallback(async () => {
    const username = window.sessionStorage.getItem('username');
    if (!username) {
      alert('접근 권한이 없습니다.');
      navigate('/home');
      return;
    }
    const [isSuccess, CertificationModel, msg] = await getCertificaiton({
      username,
    });
    if (!isSuccess) {
      alert(msg);
      navigate('/home');
    }
  }, [navigate]);

  useEffect(() => {
    isCertified();
  }, [isCertified]);

  const fetchCategoryList = async () => {
    const [isSuccess, data, msg] = await getCategoryList();
    if (isSuccess) {
      setCategoryList(data);
    } else {
      alert(msg);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return [
    titleRef,
    contentRef,
    categoryRef,
    tagRef,
    onPreview,
    onSubmit,
    categoryList,
    isModalOpen,
    onCategoryEditClick,
    onModalClose,
    fetchCategoryList,
  ] as [
    typeof titleRef,
    typeof contentRef,
    typeof categoryRef,
    typeof tagRef,
    typeof onPreview,
    typeof onSubmit,
    typeof categoryList,
    typeof isModalOpen,
    typeof onCategoryEditClick,
    typeof onModalClose,
    typeof fetchCategoryList,
  ];
}

export default useWrite;
