function List() {
  const listContents = ["Bob", "Steve", "Fred"];
  return (
    <ul>
      <li>Name: {listContents[0]}</li>
      <li>Name: {listContents[1]}</li>
      <li>Name: {listContents[2]}</li>
    </ul>
  );
}

export default List;
