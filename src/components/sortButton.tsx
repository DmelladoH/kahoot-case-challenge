import { BookListAttributes, OrderBy } from "../types";
import { OrderIcon } from "./orderedIcon";
import { Button } from "./ui/button";

interface Props {
  label: string;
  attribute: BookListAttributes;
  orderBy: OrderBy;
  toggleOrder: (attribute: BookListAttributes) => void;
}

export default function SortButton({
  label,
  attribute,
  orderBy,
  toggleOrder,
}: Props) {
  return (
    <Button variant="secondary" onClick={() => toggleOrder(attribute)}>
      {label} <OrderIcon order={orderBy} target={attribute} />
    </Button>
  );
}
