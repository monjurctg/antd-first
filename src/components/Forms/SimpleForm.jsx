import {type} from "@testing-library/user-event/dist/type";
import {Button, Form, Input, message, Alert, Result, Spin} from "antd";
import {tuple} from "antd/es/_util/type";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";

function SimpleForm() {
  const [state, setState] = useState({
    type: "success",
    message: "Success",
    description: "hello world hello world",
    isShow: false,
    loading: false,
  });
  let ShowComponent;

  let result = (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => setState({...state, isShow: false})}>
          Go Back
        </Button>,
      ]}
    />
  );

  const submit = (data) => {
    console.log(data);
    setState({...state, loading: true});
    setTimeout(() => {
      // message.warning("Login success");
      setState({...state, isShow: true, loading: false});
    }, 2000);
  };
  useEffect(() => {}, [state]);

  ShowComponent = (
    <Form onFinish={submit}>
      <Form.Item
        rules={[{required: true}]}
        label="  User Name"
        name="username"
        autoComplete={false}>
        <Input placeholder=" Enter User Name" autoComplete={false} required />
      </Form.Item>
      <Form.Item rules={[{required: true}]} label="Email " name="email">
        <Input placeholder="Enter Your Email" required autoComplete={false} />
      </Form.Item>
      <Form.Item rules={[{required: true}]} label="password " name="password">
        <Input.Password
          block
          placeholder="Enter Your Password"
          required
          autoComplete={false}
        />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
  const onClose = () => {
    setState({
      ...state,
      isShow: false,
    });
  };

  let successModal = state.isShow && (
    <Alert
      type={state.type}
      message={state.message}
      closable
      onClose={onClose}
      description={state.description}
    />
  );
  return (
    <div className="registration-container">
      <div className="form">
        {state.loading ? (
          <Spin size="large" />
        ) : state.isShow ? (
          result
        ) : (
          ShowComponent
        )}
      </div>
    </div>
  );
}

export default SimpleForm;
