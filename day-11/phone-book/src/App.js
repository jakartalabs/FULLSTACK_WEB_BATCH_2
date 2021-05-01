import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'antd/dist/antd.css'
import { Table, Tag, Space, Row, Col, Divider, Typography, Button, Modal, Form, Input } from 'antd';
import ContactForm from "./component/ContactForm";
import DetailContact from "./component/DetailContact";
const { Title } = Typography;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnSize: 'large',
      modalVisible: false,
      detail:null
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  handleOk = () => {
    this.setState({ modalVisible: false });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  // onFinish = (values) => {
  //   console.log('Success:', values);
  //   this.props.addContact(values);
  // };

  // onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  // onSubmit = () =>{
  //   console.log('Submit');
  //   // this.props.addContact(this.state.input);
  // };


  render() {
    const { btnSize, modalVisible, detail } = this.state;
    const { contactList } = this.props;

    
    const columns = [
      {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
        render: text => <div onClick={console.log('a')}>{text}</div>,
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record, index) => 
          <Button type="primary" shape="round" onClick={()=>{
            this.setState({detail: record })}
          }>
            Detail
          </Button>
        ,
      },
    ];
    // const data = [
    //   {
    //     key: '1',
    //     contact: 'Julio',
    //     company: 'Jakartalabs',
    //     email: 'julio@jl.com',
    //     phone: '085360867334'
    //   }
    // ];
    contactList.map(item => {
      item.key = item.id;
      delete item.id;
      return item;
    })
    
    return (
      <>
        <Row>
          <Col span={24}>
            <Title level={3}>Address Book</Title>
          </Col>
          <Divider/>
        </Row>
        <Row>
          <Col span={16}>
            <Table columns={columns} dataSource={contactList} />
          </Col>
          <Col span={8}>
            <DetailContact data={detail}/>
            <Row>
              <Col span={24}>
                <Button type="primary" shape="round" size={btnSize} onClick={this.showModal}>
                  New Contact
                </Button>
                <Modal title="New Contact" visible={modalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <ContactForm/>
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { allContact } = state
  return { contactList: allContact };
}

export default connect(mapStateToProps)(App);
