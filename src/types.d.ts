export interface HeaderDataInterface {
  title: string;
  create_datetime: string;
  update_datetime: string;
  tags: string[];
}

export interface BodyDataInterface {
  content: any;
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
