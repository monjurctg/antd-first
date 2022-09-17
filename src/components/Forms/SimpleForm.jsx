import {type} from "@testing-library/user-event/dist/type";
import {Button, Form, Input, message, Alert} from "antd";
import {tuple} from "antd/es/_util/type";
import React from "react";
import {useState} from "react";

function SimpleForm() {
  const submit = (data) => {
    console.log(data);
    setTimeout(() => {
      // message.warning("Login success");
      setStaet({...state, isShow: true});
    }, 2000);
  };
  const onClose = () => {
    setStaet({
      ...state,
      isShow: false,
    });
  };
  const [state, setStaet] = useState({
    type: "success",
    message: "Success",
    description: "hello world hello world",
    isShow: false,
  });
  return (
    <div className="registration-container">
      {state.isShow && (
        <Alert
          type={state.type}
          message={state.message}
          closable
          onClose={onClose}
          description={state.description}
        />
      )}
      <div className="form">
        <Form onFinish={submit}>
          <Form.Item
            rules={[{required: true}]}
            label="  User Name"
            name="username"
            autoComplete={false}>
            <Input
              placeholder=" Enter User Name"
              autoComplete={false}
              required
            />
          </Form.Item>
          <Form.Item rules={[{required: true}]} label="Email " name="email">
            <Input
              placeholder="Enter Your Email"
              required
              autoComplete={false}
            />
          </Form.Item>
          <Form.Item
            rules={[{required: true}]}
            label="password "
            name="password">
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
      </div>
    </div>
  );
}

export default SimpleForm;
