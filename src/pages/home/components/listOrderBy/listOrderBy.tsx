import SortButton from "../../../../components/sortButton";
import { BookListAttributes, OrderBy } from "../../../../types";
import styles from "./listOrderBy.module.css";

interface Props {
  orderBy: OrderBy;
  toggleOrder: (type: BookListAttributes) => void;
}

export default function ListOrderBy({ orderBy, toggleOrder }: Props) {
  return (
    <div className={styles.container}>
      <span>Sort by: </span>
      <SortButton
        label="Title"
        attribute={BookListAttributes.Title}
        orderBy={orderBy}
        toggleOrder={toggleOrder}
      />
      <SortButton
        label="Author"
        attribute={BookListAttributes.Author}
        orderBy={orderBy}
        toggleOrder={toggleOrder}
      />
    </div>
  );
}
