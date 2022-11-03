import { FooterDataModelInterface } from './models';

export interface HeaderDataInterface {
  title: string;
  create_datetime: string;
  update_datetime: string;
  tags: string[];
}

export interface BodyDataInterface {
  content: any;
}

export interface FooterDataInterface {
  next: FooterDataModelInterface;
  previous: FooterDataModelInterface;
  related_posts: FooterDataModelInterface[];
}

export interface PreviewPresetInterface {
  title: string;
  content: any;
  category: string;
  tags: string;
}

export interface PreviewDataInterface {
  title: string;
  content: any;
  category: string;
  tags: string[];
}

export interface TOCList {
  text: string;
  isTabbed: boolean;
  id: string;
}

export interface BlogData {
  id: number;
  category_id: number;
  title: string;
  content: string;
  tags: string;
}

interface ListInterface {
  isEnd: boolean;
}
