import React from 'react'
import { Spin, Space } from 'antd';

function Loading() {
    return (
        <Space className="loading">
            <Spin size="large" />
        </Space>
    )
}

export default Loading