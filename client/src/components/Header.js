import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View ,Badge} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
      return;
      case false:
      return (


        <a href = "/auth/google">
        <strong>Login with Google</strong>
        </a>




      )
      default:
      return (

        <a href = "/api/logout">
        <strong>Log Out</strong>
        </a>



      )
    }
  }
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            isWideEnough: false

        };


        this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
    collapse: !this.state.collapse,
  });
}


    render() {

      const view = {background: 'url("http://wallpapercrafter.com/uploads/posts/107750-cook_food_kitchen_eat_kitchen-image_background.jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}

        return (
          <div>
          <header>
            <Router>
                <Navbar  color="transparent" dark expand="md" fixed = "top"  scrolling>
                    <NavbarBrand href="/">
                <a href="#" className="pull-left"><img src="https://lh5.googleusercontent.com/0zEz-q9hzCo65KPWNNAGWlveA1P1WzqMx3z-n8xhqBV7G3EOoANa5E8zX4z3Qe_C6LiQx2_MDfTbo3PDr7zz=w1366-h662" className = "img-detail" alt="" /></a>



                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                          <i className="fa fa-home white-text mr-lg-5 fa-2x"> </i>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                          <i className="fa fa-user white-text mr-lg-5 fa-2x"> </i>
                              <NavLink to="#">About Us</NavLink>
                          </NavItem>
                          <NavItem>
                          <i className="fa fa-cutlery white-text mr-lg-5 fa-2x"> </i>
                              <NavLink to="#">Tie Ups</NavLink>
                          </NavItem>

                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem active>


                          <a className="gl-ic ml-0"><i className="fa fa-google white-text mr-lg-4 fa-2x"> </i></a>
                          </NavItem>
                          <NavItem active>
                          <i className = "fa fa-shopping-cart white-text mr-lg-4 fa-2x">{(this.props.cartItemsNumber > 0)?(<Badge color = "red">{this.props.cartItemsNumber}</Badge>):('')}</i>
                          </NavItem>
                          <NavItem>
                            {this.renderContent()}

                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
            <View style={view}>

              <Mask overlay="purple-light" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
              <img src="https://lh5.googleusercontent.com/0zEz-q9hzCo65KPWNNAGWlveA1P1WzqMx3z-n8xhqBV7G3EOoANa5E8zX4z3Qe_C6LiQx2_MDfTbo3PDr7zz=w1366-h662" className = "img-detail" alt="" />

                <h5>Place order in three Easy Steps</h5>
                <p>We are a team of dedicated humans aim to serve the best to our Customers</p><br/>
                <p>What are you waiting for Login with Google and be a part of our Foodpep Squad</p>
              </Mask>
            </View>
          </header>
          </div>

        );
    }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect (mapStateToProps)(Header);
