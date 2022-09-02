import { useEffect, useState } from "react";

import CurrencyData from "./components/CurrencyData";
import getCurrencies from "../../../api/currencies";

import "./styles.scss";

const Header = () => {
  const [usd, setUsd] = useState();
  const [eur, setEur] = useState();
  useEffect(() => {
    async function currencyData() {
      const currencies = await getCurrencies();
      setUsd(currencies[0].buy);
      setEur(currencies[1].buy);
    }
    currencyData();
  }, []);
  return (
    <div className="main">
      <CurrencyData usd={usd} eur={eur} />
    </div>
  );
};

export default Header;
