import { BookSummary, OrderBy } from "../types";

export const sortBooks = (books: BookSummary[], orderBy: OrderBy) => {
  return [...books].sort((a, b) => {
    switch (orderBy) {
      case OrderBy.TitleAsc:
        return a.title.localeCompare(b.title);
      case OrderBy.TitleDesc:
        return b.title.localeCompare(a.title);
      case OrderBy.AuthorAsc:
        return a.firstAuthor.localeCompare(b.firstAuthor);
      case OrderBy.AuthorDesc:
        return b.firstAuthor.localeCompare(a.firstAuthor);
      default:
        return 0;
    }
  });
};
