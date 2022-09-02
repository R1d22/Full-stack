import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const RegestrationPage = () => {
  const itemsss = [
    { id: 1, item: "phone" },
    { id: 2, item: "computer" },
  ];
  const [errMessage, setErrMessage] = useState(``);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();

  useEffect(() => {
    async function sendData() {
      await fetch("/api/db/user", {
        method: "POST",
        body: JSON.stringify(value),
      });
    }
    sendData();
  }, []);
  // useEffect(() => {
  //   async function sendData() {
  //     await fetch("/api/items")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }
  //   sendData();
  // }, []);

  // useEffect(() => {
  //   axios.post("/api/db/user").then((res) => res.send(value));
  // }, [value]);

  // const sendValue = async () => {
  //   await fetch("/api/db/user", {
  //     method: "POST",
  //     body: JSON.stringify(value),
  //   });
  // };
  useEffect(() => {
    const checkPwd = () => {
      if (value && value.password !== value.repeatPassword) {
        console.log("Error pwd");
        setErrMessage(`Passwords do not match`);
        return;
      }
      setErrMessage(``);
    };
    checkPwd();
    // sendValue();
  }, [value]);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={async (values) => {
          // alert(JSON.stringify(values, null, 2));
          // fetch("/api/db/user", {
          //   method: "POST",
          //   params: JSON.stringify(itemsss),
          // });
          axios.post("/api/db/user", { params: values });
          console.log("VALUES", values);
          setValue(values);
        }}
      >
        <Form>
          <Field name="name" type="text" placeholder="Name" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <Field
            name="repeatPassword"
            type="password"
            placeholder="Repeat password"
          />
          {errMessage}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegestrationPage;
