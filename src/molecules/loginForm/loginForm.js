import React from 'react';
import cx from 'classnames';
import { Form, Input, Button } from 'antd';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './loginForm.module.scss'

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Add code here to handle form submission, such as making an API call to authenticate the user
  };

  return (
    <div className={styles.loginFormContainer}>
      <Form
        form={form}
        name="loginForm"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          className={styles.phoneNumberFormItem}
          name="phoneNumberArea"
          rules={[
            { required: true, },
            {
              pattern: /^\d{10}$/,
              message: 'Please input a valid 10-digit phone number!',
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className={cx('site-form-item-icon', styles.inputTypePhoneNumber)} />}
            placeholder="Phone Number"
            autoComplete='off'
          />
        </Form.Item>

        <Form.Item
          className={styles.passwordFormItem}
          name="passwordArea"
          rules={[
            { required: true, },
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined className={cx('site-form-item-icon', styles.inputTypePassword)} />}
            type="password"
            placeholder="Password"
            autoComplete='off'
          />
        </Form.Item>

        <Form.Item>
          <div className={styles.submitBtnContainer}> 
            <div
              className={styles.formClearBtn}
              onClick={() => form.resetFields()}
            >
              Clear
            </div>
            <Button type="primary" htmlType="submit" className={styles.formSubmitBtn}>
              Log in
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
