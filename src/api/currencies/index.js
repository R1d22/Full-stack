import axios from "axios";

const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

async function getCurrencies() {
  const response = await axios.get(url);
  const values = response.data;
  return values;
}

export default getCurrencies;
