import React, {Component } from 'react';

import { Row, Col, Card, CardBody, Button } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart,updateCart } from '../actions/index.js';

class RestaurantItem extends Component {
  handleCart() {
    const restaurant = [...this.props.cart,
      {
      _id:this.props._id,
      title:this.props.title,
      description:this.props.description,
      images:this.props.images,
      price:this.props.price,
      quantity:1
    }]
    // CHECK IF CART IS empty
    if (this.props.cart.length > 0) {
      // CART IS NOT empty
      let _id = this.props._id;
      let cartIndex = this.props.cart.findIndex(function(cart) {
        return cart._id === _id;
      })
      // IF RETURNS -1 THERE ARE NO ITEMS WITH SAME  ID //
      if (cartIndex === -1) {
        this.props.addToCart(restaurant)
      } else {
        // We NEED TO UPDATE QUANTITY //
        this.props.updateCart(_id,1,this.props.cart);
      }
    } else {
      // CART IS EMPTY
      this.props.addToCart(restaurant);
    }


  }
  render() {
    return(
      <Card>
      <CardBody>
      <Row>
      <Col xs = "12" sm = "4" >
      <img src = {this.props.images} className = "img-thumbnail" alt = ""/>
      </Col>

      <Col xs = "6" sm = "8">

      <h6>{this.props.title}</h6>
      <p>{this.props.description}</p>
      <h6>usd. {this.props.price}</h6>
  <Button onClick = {this.handleCart.bind(this)} color="mdb-color">Order Now</Button>
      </Col>





      </Row>
      </CardBody>
      </Card>

    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart:addToCart,
    updateCart:updateCart
  },dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantItem);
