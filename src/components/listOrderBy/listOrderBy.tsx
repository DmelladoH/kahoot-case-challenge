import ArrowDown from "../../assets/svgs/arrowDown";
import ArrowUp from "../../assets/svgs/arrowUp";
import { OrderBy } from "../../types";
import { Button } from "../ui/button";
import styles from "./listOrderBy.module.css";

interface Props {
  orderBy: OrderBy;
  toggleOrder: (type: "title" | "author") => void;
}

//TODO IMPROVE
const getOrderIcon = (order: OrderBy, target: "title" | "author") => {
  if (target === "title") {
    if (order === OrderBy.TitleAsc)
      return <ArrowUp width="16px" height="auto" />;
    if (order === OrderBy.TitleDesc)
      return <ArrowDown width="16px" height="auto" />;
  } else if (target === "author") {
    if (order === OrderBy.AuthorAsc)
      return <ArrowUp width="16px" height="auto" />;
    if (order === OrderBy.AuthorDesc)
      return <ArrowDown width="16px" height="auto" />;
  }
  return <div style={{ width: "16px", height: "auto" }} />;
};

export default function ListOrderBy({ orderBy, toggleOrder }: Props) {
  return (
    <div className={styles.container}>
      <span>Sort By: </span>
      <Button variant="secondary" onClick={() => toggleOrder("title")}>
        Title {getOrderIcon(orderBy, "title")}
      </Button>
      <Button variant="secondary" onClick={() => toggleOrder("author")}>
        Author {getOrderIcon(orderBy, "author")}
      </Button>
    </div>
  );
}
