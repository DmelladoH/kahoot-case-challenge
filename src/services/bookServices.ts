import { URL } from "../constants";
import { BookResponse, BookSummary } from "../types";

export async function getBooks(page: number = 1): Promise<BookSummary[]> {
  const res = await fetch(`${URL}?page=${page}`);

  //TODO ERROR HANDLING
  const data = await res.json();
  return formatBooksResponse(data.results);
}

const formatBooksResponse = (responseResults: BookResponse[]) => {
  return responseResults.map((elem) => ({
    id: elem.id,
    title: elem.title,
    subjects: elem.subjects,
    languages: elem.languages,
    image: elem.formats["image/jpeg"],
    firstAuthor: elem.authors[0]?.name || "anonymous",
  }));
};
