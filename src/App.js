import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  console.log(page);
  return (
    <div className="App">
      <h1> The Rick and Morty Show</h1>
      <Characters characterList={characterList} />
      <div className="btnContainer">
        {" "}
        {page < 34 ? (
          <button className="btn" onClick={() => setPage(page + 1)}>
            Next
          </button>
        ) : null}
        {page > 1 ? (
          <button
            className="btn"
            onClick={() => (page > 1 ? setPage(page - 1) : null)}
          >
            Previous
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
