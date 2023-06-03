import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  return (
    <div className="authentication">
      <div className="authentication-from card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical">
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
            Login
          </Button>
          <Link to="/register" className="anchor mt-2">
            Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
