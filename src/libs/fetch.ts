import axios from 'axios';
import { baseUrl } from '../baseUrl';
import {
  BlogModel,
  CategoryListModel,
  CertificationModel,
  CommentListModel,
  PostListResponse,
} from '../models';
import certifiedAxios from './certifiedAxios';

const errorMiddleware = (e: any) => {
  if (e?.response) {
    if (e.response?.data?.msg) {
      return e.response.data.msg;
    }
    switch (e.response.status) {
      case 401:
        return '로그인 후 이용해 주세요.';
      case 403:
        return '접근 권한이 없습니다.';
      case 500:
        return '그런건 없어용~';
      case 408:
        return '미안합니다. 서버가 맛이 갔나봐요.';
      default:
        return '';
    }
  } else {
    return '네트워크가 원활하지 않습니다. 잠시후 다시 시도해 주세요.';
  }
};

// 로그인 관련
export const getCertificaiton = async ({
  username,
}: {
  username: string;
}): Promise<[boolean, CertificationModel | null, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/user/?username=${username}`;
    const { data } = await certifiedAxios.get(fetchUrl);
    return [true, data[0]];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, null, responseMsg];
  }
};

export const postLogin = async ({
  id,
  pw,
}: {
  id: string;
  pw: string;
}): Promise<[boolean, string, string?]> => {
  try {
    const requestFormData = new FormData();
    requestFormData.append('username', id);
    requestFormData.append('password', pw);

    const fetchUrl = `${baseUrl}/admin/login/?next=/admin/`;
    const { data } = await certifiedAxios.post(fetchUrl, requestFormData, {
      headers: { 'Content-Type': 'multipart/form-data;' },
    });
    return [true, data];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

export const logoutRequest = async (): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/admin/logout`;
    await certifiedAxios.post(fetchUrl);
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

// 게시글 관련
export const getPostList = async ({
  queryString,
}: {
  queryString: string;
}): Promise<[boolean, PostListResponse | null, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/blog?${queryString}`;
    const { data } = await axios.get(fetchUrl);
    return [true, data];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '마지막 글입니다.';
    return [false, null, responseMsg];
  }
};

export const getCategoryList = async (): Promise<
  [boolean, CategoryListModel[], string?]
> => {
  try {
    const fetchUrl = `${baseUrl}/category/`;
    const { data } = await axios.get(fetchUrl);
    return [true, data.data];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg
      ? errMsg
      : '카테고리 목록 요청중 에러가 발생하였습니다.';
    return [false, [], responseMsg];
  }
};

export const postCategory = async (
  categoryName: string,
): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/category/`;
    await certifiedAxios.post(fetchUrl, {
      category_name: categoryName,
    });
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

export const putCategory = async (
  categoryId: string,
  categoryName: string,
): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/category/${categoryId}/`;
    await certifiedAxios.put(fetchUrl, {
      category_name: categoryName,
    });
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

export const deleteCategory = async (
  categoryId: string,
): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/category/${categoryId}/`;
    await certifiedAxios.delete(fetchUrl);
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

// 블로그
export const getBlog = async (
  id: string,
): Promise<[boolean, BlogModel | null, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/blog/${id}/`;
    const { data } = await axios.get(fetchUrl);
    return [true, data];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '해당 게시글이 존재하지 않습니다.';
    return [false, null, responseMsg];
  }
};

export const postBlog = async ({
  title,
  content,
  category,
  tag,
}: {
  title: string;
  content: string;
  category: string;
  tag: string;
}): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/blog/`;
    await certifiedAxios.post(fetchUrl, {
      title,
      content,
      category_id: category,
      tags: tag,
    });
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

export const putBlog = async ({
  id,
  title,
  content,
  category,
  tag,
}: {
  id: string;
  title: string;
  content: string;
  category: string;
  tag: string;
}): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/blog/${id}/`;
    await certifiedAxios.put(fetchUrl, {
      title,
      content,
      category_id: category,
      tags: tag,
    });
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '요청중 에러가 발생하였습니다.';
    return [false, responseMsg];
  }
};

export const deleteBlog = async (id: string): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/blog/${id}/`;
    await certifiedAxios.delete(fetchUrl);
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '해당 게시글이 존재하지 않습니다.';
    return [false, responseMsg];
  }
};

export const getCommentList = async (
  id: string,
): Promise<[boolean, CommentListModel[], string?]> => {
  try {
    const fetchUrl = `${baseUrl}/comment?post_id=${id}/`;
    const { data } = await certifiedAxios.get(fetchUrl);
    return [true, data];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '해당 게시글이 존재하지 않습니다.';
    return [false, [], responseMsg];
  }
};

export const postComment = async ({
  id,
  nickname,
  password,
  isSecret,
  comment,
}: {
  id: string;
  nickname: string;
  password: string;
  isSecret: boolean;
  comment: string;
}): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/comment/`;
    await axios.post(fetchUrl, {
      post_id: id,
      nickname,
      password,
      is_secret: isSecret,
      comment,
    });
    return [true];
  } catch (e) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '해당 게시글이 존재하지 않습니다.';
    return [false, responseMsg];
  }
};

export const deleteComment = async (
  commentId: number,
  password: string,
): Promise<[boolean, string?]> => {
  try {
    const fetchUrl = `${baseUrl}/comment/${commentId}/`;
    await axios.delete(fetchUrl, {
      data: {
        password: password,
      },
    });
    return [true];
  } catch (e: any) {
    const errMsg = errorMiddleware(e);
    const responseMsg = errMsg ? errMsg : '해당 댓글이 존재하지 않습니다.';
    return [false, responseMsg];
  }
};
