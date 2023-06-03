import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  return (
    <div className="authentication">
      <div className="authentication-from card p-3">
        <h1 className="card-title">Hey there!</h1>
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            Register
          </Button>

          <Link to="/" className="anchor mt-2">
            Login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
