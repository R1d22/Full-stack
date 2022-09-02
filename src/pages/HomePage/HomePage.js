import { useState, useEffect } from "react";

import Header from "../../componenst/Header/Header";
import ItemsList from "../../componenst/ItemsList/ItemsList";

const HomePage = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <div>
      <Header />
      {!items ? "Loading.." : items.map((el) => <ItemsList name={el.item} />)}
    </div>
  );
};
export default HomePage;
