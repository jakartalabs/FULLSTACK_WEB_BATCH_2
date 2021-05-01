import React from 'react'
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { addContact } from '../redux/action'

function ContactForm({ addContact }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    addContact(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Contact"
          name="contact"
          rules={[{ required: true, message: 'Please input your Contac!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: 'Please input your Company!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your Phone!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default connect(null, { addContact })(ContactForm);

