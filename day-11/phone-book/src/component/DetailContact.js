import React from 'react'
import { Row, Col } from 'antd';


function DetailContact({data}) {
  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>Name</Col>
            <Col span={12}>: {data.contact}</Col>
          </Row>
          <Row>
            <Col span={12}>Company</Col>
            <Col span={12}>: {data.company}</Col>
          </Row>
          <Row>
            <Col span={12}>Email</Col>
            <Col span={12}>: {data.email}</Col>
          </Row>
          <Row>
            <Col span={12}>Phone</Col>
            <Col span={12}>: {data.phone}</Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default DetailContact
