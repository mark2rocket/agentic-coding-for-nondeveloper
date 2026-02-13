// 콘텐츠 타입 정의

export interface FrontMatter {
  title: string;
  description?: string;
  order?: number;
  icon?: string;
  author?: string;
  date?: string;
  tags?: string[];
}

export interface MarkdownContent {
  frontMatter: FrontMatter;
  content: string;
  slug: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface NavItem {
  title: string;
  slug?: string;
  icon?: string;
  children?: NavItem[];
}

export interface NavigationSection {
  title: string;
  slug: string;
  icon?: string;
  items: NavItem[];
}

export interface Navigation {
  sections: NavigationSection[];
}
