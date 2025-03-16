export interface BooksResponse {
  id: number;
  title: string;
  authors: Person[];
  summaries: string[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}
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
  birth_year: number | null;
  death_year: number | null;
}

export interface Formats {
  "text/html": string;
  "application/epub+zip": string;
  "application/x-mobipocket-ebook": string;
  "text/plain; charset=us-ascii": string;
  "application/rdf+xml": string;
  "image/jpeg": string;
  "application/octet-stream": string;
}

export enum OrderBy {
  TitleAsc = "titleAsc",
  TitleDesc = "titleDesc",
  AuthorAsc = "authorAsc",
  AuthorDesc = "authorDesc",
}

export interface BookResponse {
  id: number;
  title: string;
  authors: Person[];
  summaries: string[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}

export interface BookDetail {
  id: number;
  title: string;
  authors: Person[];
  summaries: string[];
  translators: Person[];
  image: string;
}
