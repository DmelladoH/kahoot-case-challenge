import { URL } from "../constants";
import { BookDetail, BookResponse, BooksResponse, BookSummary } from "../types";

export async function getBooks(page: number = 1): Promise<BookSummary[]> {
  const res = await fetch(`${URL}?page=${page}`);

  //TODO ERROR HANDLING
  const data = await res.json();
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
  const res = await fetch(`${URL}/${id}`);

  //TODO ERROR HANDLING
  const data = await res.json();
  return formatBookResponse(data);
}

const formatBookResponse = (response: BookResponse) => ({
  id: response.id,
  title: response.title,
  authors: response.authors,
  summaries: response.summaries,
  translators: response.translators,
  image: response.formats["image/jpeg"],
});
