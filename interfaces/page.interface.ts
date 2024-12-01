export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: TopPageAdvantage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: HhData;
  qas: unknown[];
  addresses: unknown[];
  categoryOn: string;
  blog: Blog;
  sravnikus: Sravnikus;
  learningclub: Sravnikus;
}
interface Sravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}
interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}
interface HhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}
interface TopPageAdvantage {
  title: string;
  description: string;
  _id: string;
}
