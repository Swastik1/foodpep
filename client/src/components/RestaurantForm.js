import React , { Component } from 'react';
import { Input,Card,CardBody,Button,Row,Col,form,Image,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { RestaurantItem } from './RestaurantItem';
import RestaurantList from './RestaurantList';
import { postRestaurants,deleteRestaurants,getRestaurants } from '../actions/index.js';
import axios from 'axios';

class RestaurantForm extends Component {
constructor() {
  super();
  this.toggle = this.toggle.bind(this);
  this.state = {
    images:[{}],
    img:''
  }
}
componentDidMount() {
  this.props.getRestaurants();
  // Get images from api //
  axios.get('/api/images')
  .then(function(response){
    this.setState({images:response.data});
  }.bind(this))
  .catch(function(err){
    this.setState({images:'error loading image file from the server'})
  }.bind(this))
}
toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}
  handleSubmit() {
    const restaurant = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      images: findDOMNode(this.refs.image).value,
        price: findDOMNode(this.refs.price).value

    }]
    this.props.postRestaurants(restaurant);

  }
  handleSelect(img) {
    this.setState({
      img: '/images/' + img
    })
  }


  render() {
    const imgList = this.state.images.map(function(imgArr,i){
      return(
        <DropdownItem key = {i} eventkey = {imgArr.name}
        onClick = {this.handleSelect.bind(this,imgArr.name)}>{imgArr.name}</DropdownItem>
      )
    },this)
    return (
      <Card>
      <CardBody>
      <Row>
      <Col xs = "12" sm = "6">
      <Card>
      <div className = "input-group mb-3">
      <input type = "text" className = "form-control" id = "image" ref = "image" value = {this.state.img} />
      <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
      <DropdownToggle caret color = "primary">
      Select an Image
      </DropdownToggle>
      <DropdownMenu>
      {imgList}
      </DropdownMenu>
      </Dropdown>
</div>
      <img src = {this.state.img} className = "img-thumbnail" alt = "invalid" />
      </Card>
      </Col>
      <Col xs = "12" sm = "6">
      <Card>
      <h2 className = "mb-5">Add Restaurants</h2>
      <form>
    <div className = "form-group">
    <label for ="formgrouprestaurantinput">Restaurant name</label>
    <input type = "text" className = "form-control" id="title" placeholder = "restaurant-name" ref = "title" />
    <label for = "formgroupcostinput">Description</label>
    <input type = "text" className = "form-control" id = "description" placeorder = "description" ref = "description" />
    <label for = "formgroupcuisinesinput">Cost for Two</label>
    <input type = "number" className = "form-control" id = "price" placeholder = "cost-for-two" ref = "price" />
      {RestaurantList}
    <div className = "text-center">
    <Button onClick={this.handleSubmit.bind(this)} color = "deep-orange">Add</Button>

  </div>
  </div>
      </form>
      </Card>
      </Col>
      </Row>



      </CardBody>
      </Card>

    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  postRestaurants,
  getRestaurants
} , dispatch)
}
export default connect(null,mapDispatchToProps)(RestaurantForm);
