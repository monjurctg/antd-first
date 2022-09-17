import "antd/dist/antd.css";
import "./App.css";
import { Col, Row, Layout, Card, Select } from "antd";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import SimpleForm from "./components/Forms/SimpleForm";
import TablePaginition from "./components/table/TablePaginition";

function App() {
  const [users, setUsers] = useState([]);
  const fruits = ["apple", "bannana", "Orange", "Cherry"];

  const onFinish = (values) => {
    setUsers([...users, values]);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {/* <SimpleForm /> */}
      <TablePaginition />
    </>
  );
}

export default App;
