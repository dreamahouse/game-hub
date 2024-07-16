import useGenres from "../hooks/useGenres";

const GenerList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
