import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';
import Order from './Order';
const PlaceOrder = () => <h2>PlaceOrder</h2>
const OrderPlaced = () => <h2>OrderPlaced</h2>

class App extends Component {
componentDidMount() {
  this.props.fetchUser();

}


  render() {
  return(


    <BrowserRouter>
    <div>
    <Header
    cartItemsNumber = {this.props.totalQty} />
    <Route exact path = "/" component = {Landing} />

<Route exact path = "/restaurantsearch" component = {RestaurantList} />
<Route exact path = "/admin" component = {RestaurantForm} />



    <Route exact path = "/restaurantsearch/chooseorder" component = {Order} />
    <Route exact path = "/restaurantsearch/chooseorder/placeorder" component = {PlaceOrder} />
    <Route  path = "/restaurantsearch/chooseorder/placeorder/orderplaced" component = {OrderPlaced} />
    <Footer />

    </div>
    </BrowserRouter>


  );
}
}
function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  }
}
export default connect (mapStateToProps , actions)(App);
