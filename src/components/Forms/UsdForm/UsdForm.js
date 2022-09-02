import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";

import getCurrencies from "../../../api/currencies";

import "./styles.scss";

const EurForm = () => {
  const [value, setValue] = useState();
  const [eur, setEur] = useState();
  const [usd, setUsd] = useState();
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState("uah");

  const options = [
    {
      label: "to uah",
      value: "uah",
    },
    {
      label: "to eur",
      value: "eur",
    },
  ];
  useEffect(() => {
    async function currencyData() {
      const currencies = await getCurrencies();
      setEur(currencies[1].buy);
      setUsd(currencies[0].buy);
    }
    currencyData();
  }, []);

  useEffect(() => {
    count();
  }, [value, currency]);
  function count() {
    if (value !== undefined && currency === "uah") {
      const toUah = usd * value.value;
      setResult(toUah.toFixed(2) + " грн");
    } else if (value !== undefined && currency === "eur") {
      const toEur = value.value * (usd / eur);
      setResult(toEur.toFixed(2) + " usd");
    }
  }

  return (
    <>
      <div className="usd-form">
        <Formik
          initialValues={{ value: "" }}
          onSubmit={(values) => {
            setValue(values);
          }}
        >
          <Form className="forms">
            <Field
              name="value"
              className="input"
              type="number"
              placeholder="USD"
            />
            <select
              id="currency"
              className="select"
              value={currency}
              onChange={(el) => setCurrency(el.target.value)}
            >
              {options.map((option, key) => (
                <option key={key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button className="submit-btn" type="submit">
              Конвертація
            </button>
            <div>{result}</div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EurForm;
