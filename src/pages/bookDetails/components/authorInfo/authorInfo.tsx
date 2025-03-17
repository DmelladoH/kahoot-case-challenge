import { Person } from "../../../../types";

interface Props {
  author: Person;
}
export function AuthorInfo({ author }: Props) {
  return (
    <div>
      <h4>{author.name}</h4>
      <p>
        {author.birthYear || "unknown"} - {author.deathYear}
      </p>
    </div>
  );
}
