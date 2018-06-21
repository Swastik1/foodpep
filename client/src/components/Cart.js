import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCartItem,updateCart,getCart } from '../actions/index.js';
import { Card , Col ,Row , Button, CardBody,ButtonGroup,Badge,Modal,ModalBody,ModalHeader,ModalFooter,ModalTitle} from 'mdbreact';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }

onDelete(_id){
  const currentRestaurantToDelete = this.props.cart;
  // determine at which index in restaurant array the restaurant is to be deleted
  const indexToDelete = currentRestaurantToDelete.findIndex(
function(cart) {
 return cart._id === _id;
}
)
// use slice to remove book at a particular indexToDelete
 let cartAfterDelete = [...currentRestaurantToDelete.slice(0,indexToDelete),
   ...currentRestaurantToDelete.slice(indexToDelete + 1)]

  this.props.deleteCartItem(cartAfterDelete);

}
onIncrement(_id){
  this.props.updateCart(_id, 1,this.props.cart);
}
onDecrement(_id, quantity){
  if(quantity > 1){
    this.props.updateCart(_id, -1,this.props.cart);
  }
}
constructor(props) {
  super(props);
  this.state = {
    showModal: false
  }
}
open(){
  this.setState({showModal:true})
}
close() {
  this.setState({showModal:false})
}



  render() {
        if(this.props.cart[0]){
    return this.renderCart();
  }  else {
      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return(<div></div>)
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArr, index){
      return (
        <Card key = {cartArr._id}>
        <Row>
        <Col md = "8" >
        <h6>{cartArr.title}</h6><span></span>

        </Col>
        <Col xs = "12" sm = "2">
        <h6> Rs.{cartArr.price}</h6>
        </Col>
        <Col xs = "12" sm = "2">
        <h6>qty. <Badge badgeColor="success">{cartArr.quantity}</Badge></h6>
        </Col>
        <Col xs = "6" sm = "4">
        <ButtonGroup style = {{minWidth: '300px'}}>
        <Button onClick = {this.onDecrement.bind(this,cartArr._id,cartArr.quantity)} color = "default" size = "sm">-</Button>
        <Button onClick = {this.onIncrement.bind(this,cartArr._id,cartArr.quantity)} color = "default" size = "sm">+</Button>
        <span>      </span>
        <Button onClick = {this.onDelete.bind(this,cartArr._id)} color = "danger" size = "sm">DELETE</Button>
        </ButtonGroup>
        </Col>


        </Row>
        </Card>
      )
    },this)
  return (
    <div className = "container">
    <Card>
    <div className = "card-header">Cart</div>
    <div className = "card bg-primary text-dark">


    {cartItemsList}

    <button type="button" className="btn btn-mdb-color" data-toggle="modal" data-target="#modalAbandonedCart">Proceed to CheckOut</button>

    <div className="modal fade right" id="modalAbandonedCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-backdrop="false">
            <div className="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">

                <div className="modal-content">

                    <div className="modal-header">
                        <p className="heading">Product in the cart
                        </p>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="white-text">&times;</span>
                        </button>
                    </div>


                    <div className="modal-body">

                        <div className="row">
                            <div className="col-3">
                                <p></p>
                                <p className="text-center"><i class="fa fa-shopping-cart fa-4x"></i></p>
                            </div>

                            <div className="col-9">
                                <p>Do you need more time to make a purchase decision?</p>
                                <p>No pressure, your product will be waiting for you in the cart.</p>
                                <p>Your bill is ₹{this.props.totalAmount}</p>
                            </div>
                        </div>
                    </div>


                    <div class="modal-footer justify-content-center">
                        <a type="button" className="btn btn-primary" >Go to cart</a>
                        <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</a>
                    </div>
                </div>

            </div>
        </div>



</div>


    </Card>
    </div>
  )
  }

}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem:deleteCartItem,
    updateCart:updateCart,
    getCart:getCart
  },dispatch)
}

  export default connect(mapStateToProps,mapDispatchToProps)(Cart);
