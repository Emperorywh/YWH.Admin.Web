import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => (
	<Result
		status="404"
		title="404"
		subTitle="对不起，此页面不存在！"
		extra={
			<Button type="primary" onClick={() => history.push('/')}>
				回到首页
			</Button>
		}
	/>
);

export default NoFoundPage;
