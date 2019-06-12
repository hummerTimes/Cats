import React, { useContext, useState, useEffect } from "react";
import Item from "./Item";
import { ThemeContext, PodcastContext } from "./app-context";
import { fetchCatBreeds } from "./API";
import TableCats from "./TableCats";

const getDataCats = () => {
  const [dataTable, setData] = useState(null);

  useEffect(() => {
    fetchCatBreeds().then(result => {
      setData(result);
    });
  }, []);
  return dataTable;
};

const App = () => {
  const podcast = useContext(PodcastContext);
  const theme = useContext(ThemeContext);
  const data = getDataCats();

  return (
    <div className={`card ${theme}`}>
      <Item label="Cats Table">
        <TableCats data={data} />
      </Item>

      <Item label="Podcast">
        <h4>{podcast}</h4>
      </Item>
    </div>
  );
};

var as = "sdfcacd";

export default App;
