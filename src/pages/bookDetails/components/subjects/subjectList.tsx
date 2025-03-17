interface Props {
  subjects: string[];
}
export default function SubjectList({ subjects }: Props) {
  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject}>{subject}</li>
      ))}
    </ul>
  );
}
