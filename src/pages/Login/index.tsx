import Footer from '@/components/Footer';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Tabs } from 'antd';
import React from 'react';
import styles from "./index.less";
import { history } from '@umijs/max';

const Login: React.FC = () => {

	const onFinish = () => {
		history.push('/');
	}

	return (
		<div className={styles.container_class_name}>
			<div className={styles.login_form}>
				<div className={styles.login_form_head}>
					<div className={styles.login_form_title}>
						<img alt="logo" src="/logo.svg" />
						<span>Ant Design</span>
					</div>
					<div className={styles.login_form_subtitle}>
						Ant Design 是西湖区最具影响力的 Web 设计规范
					</div>
				</div>
				<Tabs
					centered
					items={[
						{
							key: 'account',
							label: "账户密码登录"
						}
					]}
				/>
				<Form
					name="basic"
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: '请输入用户名！' }]}
					>
						<Input prefix={<UserOutlined />} size="large" placeholder='用户名' />
					</Form.Item>

					<Form.Item
						name="password"
						rules={[{ required: true, message: '请输入密码！' }]}
					>
						<Input.Password prefix={<LockOutlined />} size="large" placeholder='密码' />
					</Form.Item>

					<Form.Item>
						<Button block size="large" type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
