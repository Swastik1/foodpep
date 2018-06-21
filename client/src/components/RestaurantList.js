import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Col,Container,Row } from 'mdbreact';
import { bindActionCreators } from 'redux';
import {getRestaurants } from '../actions/index.js';
import RestaurantItem from './RestaurantItem';
import RestaurantForm from './RestaurantForm';
import Cart from './Cart';
class RestaurantList extends Component {
  componentDidMount() {
    this.props.getRestaurants()
      /*[
        {
        id: 1,
        title: 'adda unplugged',
        description: 'good food good times',
        price: '123'
      },
      {
        id: 2,
        title: 'richards kitchen',
        description: 'kiit evergreen charm ',
        price: '456'
      }
      ]
    )
  }*/
}

  render() {

    const restaurantsList = this.props.restaurants.map(function(restaurantsArr)  {

    return(
  <Col xs = "12" sm ="6" md = "4" key = {restaurantsArr._id} >
<RestaurantItem

_id = {restaurantsArr._id}
title = {restaurantsArr.title}
description = {restaurantsArr.description}
images = {restaurantsArr.images}
price = {restaurantsArr.price}
/>
  </Col>
    )
  } )

  return (
    <Row>
    <Container>
    <Row>

    <Col xs = "12" sm = "6">
    <Cart />
    </Col>
    </Row>
    </Container>

    <Container>
    <Row>
    {restaurantsList}
    </Row>

    </Container>
    </Row>
  )
}
}

function mapStateToProps(state) {
  return {
    restaurants:state.restaurants.restaurants
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRestaurants:getRestaurants
  },dispatch)


  }
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantList);
