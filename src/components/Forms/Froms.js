import React from "react";
import UsdForm from "./UsdForm/UsdForm";
import EurForm from "./EurForm/EurForm";

import "./styles.scss";

const Forms = () => {
  return (
    <div className="forms">
      <UsdForm />
      <EurForm />
    </div>
  );
};

export default Forms;
