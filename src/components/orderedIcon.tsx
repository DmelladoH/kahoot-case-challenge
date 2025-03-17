import ArrowDown from "../assets/svgs/arrowDown";
import ArrowUp from "../assets/svgs/arrowUp";
import { BookListAttributes, OrderBy } from "../types";

interface Props {
  order: OrderBy;
  target: BookListAttributes;
}

export function OrderIcon({ order, target }: Props) {
  const isAscending =
    (target === BookListAttributes.Title && order === OrderBy.TitleAsc) ||
    (target === BookListAttributes.Author && order === OrderBy.AuthorAsc);

  const isDescending =
    (target === BookListAttributes.Title && order === OrderBy.TitleDesc) ||
    (target === BookListAttributes.Author && order === OrderBy.AuthorDesc);

  if (isAscending) return <ArrowUp width="16px" height="16px" />;
  if (isDescending) return <ArrowDown width="16px" height="16px" />;

  return <div style={{ width: "16px", height: "16px" }} />;
}
