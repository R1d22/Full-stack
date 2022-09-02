import "./styles.scss";

const CurrencyData = ({ usd, eur }) => {
  return (
    <div className="container">
      <div className="first-item">usd {usd} грн</div>
      <div className="second-item">eur {eur} грн</div>
    </div>
  );
};

export default CurrencyData;
