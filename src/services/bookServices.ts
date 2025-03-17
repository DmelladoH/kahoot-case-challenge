import { URL } from "../constants";
import { BookDetail, BookResponse, BooksResponse, BookSummary } from "../types";

export async function getBooks(page: number = 1): Promise<BookSummary[]> {
  const data = await fetchWithErrorHandling(`${URL}?page=${page}`);
  return formatBooksResponse(data.results);
}

const formatBooksResponse = (responseResults: BooksResponse[]) => {
  return responseResults.map((elem) => ({
    id: elem.id,
    title: elem.title,
    subjects: elem.subjects,
    languages: elem.languages,
    image: elem.formats["image/jpeg"],
    firstAuthor: elem.authors[0]?.name || "Anonymous",
  }));
};

export async function getBookById(id: string): Promise<BookDetail> {
  const data = await fetchWithErrorHandling(`${URL}/${id}`);
  return formatBookResponse(data);
}

const formatBookResponse = (response: BookResponse) => ({
  id: response.id,
  title: response.title,
  authors: response.authors.map((elem) => ({
    name: elem.name,
    birthYear: elem.birth_year,
    deathYear: elem.death_year,
  })),
  subjects: response.subjects,
  summaries: response.summaries,
  image: response.formats["image/jpeg"],
});

async function fetchWithErrorHandling(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
