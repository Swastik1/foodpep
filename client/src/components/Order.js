import React,{ Component } from 'react';
import {connect } from 'react-redux';
import { Container,Card,Row,Col } from 'mdbreact';

import { getCart } from '../actions/index.js';
import Cart from './Cart';


class Order extends Component {



  render() {
    /*
    const cartItemsList =  this.props.cart.map(function(cartArr){
      return (
        <Container>
        <h3>Thank you for Placing the order!</h3>
        <h4>You have Ordered</h4>
        <Card key = {cartArr._id}>
        <Row>
        <Col md = "8">
        <h4>{cartArr.title}</h4><span></span>
        </Col>
        </Row>
        </Card>
        </Container>

      )
    })
    */
    return (
      <Container>
      <Row>
      <Card key = {Cart.id}>
      <Row>
      <Col md = "8">
      <h4>{Cart.title}</h4>
      </Col>
      </Row>
      </Card>
      </Row>
      </Container>
    )
}
}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps,null)(Order);
