interface Props {
  title?: string;
  sport?: string;
}

export default function New({ title, sport }: Props) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{sport}</p>
    </div>
  );
}