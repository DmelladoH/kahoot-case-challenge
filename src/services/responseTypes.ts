export interface BooksResponse {
  id: number;
  title: string;
  authors: PersonResponse[];
  summaries: string[];
  translators: PersonResponse[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}

interface PersonResponse {
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

export interface BookResponse {
  id: number;
  title: string;
  authors: PersonResponse[];
  summaries: string[];
  translators: PersonResponse[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}
