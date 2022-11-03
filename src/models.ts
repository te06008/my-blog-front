//Login
export interface CertificationModel {
  username: string;
  is_active: boolean;
}

//Home
export interface PostingListModel {
  id: number;
  title: string;
  tags: string;
  created_at: string;
  updated_at: string;
  content: string;
  category_id: number;
}

export interface PostListResponse {
  count: number;
  previous: string;
  next: string;
  results: PostingListModel[];
}

export interface CategoryListModel {
  id: number;
  category_name: string;
  count: number;
}

//blog
export interface FooterDataModelInterface {
  id: number;
  title: string;
}

export interface BlogModel {
  id: number;
  category_id: number;
  title: string;
  tags: string;
  created_at: string;
  updated_at: string;
  content: string;
  related_posts: FooterDataModelInterface[];
  previous: FooterDataModelInterface;
  next: FooterDataModelInterface;
}

export interface CommentListModel {
  id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  is_secret: boolean;
  nickname: string | null;
  comment: string;
}
