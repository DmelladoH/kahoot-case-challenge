export type OrderByOptions =
  | "titleAsc"
  | "titleDesc"
  | "authorAsc"
  | "authorDesc";

export interface BookSummary {
  id: number;
  title: string;
  subjects: string[];
  languages: string[];
  image: string;
  firstAuthor: string;
}

export interface Person {
  name: string;
  birthYear: number | null;
  deathYear: number | null;
}

export enum OrderBy {
  TitleAsc = "titleAsc",
  TitleDesc = "titleDesc",
  AuthorAsc = "authorAsc",
  AuthorDesc = "authorDesc",
}

export interface BookDetail {
  id: number;
  title: string;
  authors: Person[];
  summaries: string[];
  subjects: string[];
  image: string;
}
