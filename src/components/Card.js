import { Card, Col } from 'antd'
import React from 'react'
const { Meta } = Card;

//Card component
const CardComponent = ({data}) => {

    return(
        <Col>
        <a href={data.url} target="_blank">
        <Card
            className="card"
            hoverable
            cover={<img alt="example" src={data.urlToImage || "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} />}
        >
            <Meta title={data.title} description={data.description} />
        </Card>
        </a>
        </Col>
    )
}
export default CardComponent