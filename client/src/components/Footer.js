import React from 'react';
import { Col, Container, Row, Footer,View,Input,Button,Fa } from 'mdbreact';

class FooterPage extends React.Component {
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
    render(){
      const view = {background: 'url("http://wallpapercrafter.com/uploads/posts/107750-cook_food_kitchen_eat_kitchen-image_background.jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}

        return(


<div>
          <View style={view}>
          <section id = "contact" >
          <div className = "rgba-black-strong py-5">
          <Container>
          <div className = "wow fadeIn">
          <h2 className = "h1 text-white pt-5 pb-3 text-center">Contact Us</h2>
          <p className = "text-white px-5 mb-5 pb-3 lead text-center">
          Your Valuable Feedback is Important to Us
          </p>
          </div>
          <div className = "card mb-5 wow fadeInUp" data-wow-delay=".4s">
          <div className = "card-body p-5">
          <Row>
          <Col md="8">
          <div>
          <form action = "https://formspree.io/youremail@example.com" method = "POST">

    <p className="h5 text-center mb-4">Write to us</p>
    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
    <Input label="Subject" icon="tag" group type="email" validate error="wrong" success="right"/>
    <Input type="textarea" label="Your message" icon="pencil"/>

          </form>
          </div>
          </Col>
          <Col md = "4">
          <ul className = "list-unstyled text-center">
          <li className = "mt-4"><i className = "fa fa-map-marker indigo-text fa-2x"></i>
          <p className = "mt-2">SOACH TBI,ITER,SIKSHA O ANUSANDHAN,BHUBANESWAR</p>
          </li>
          <li className = "mt-4"><i className = "fa fa-phone indigo-text fa-2x"></i>
          <p className = "mt-2">+91234567890</p>
          </li>
          <li className = "mt-4"><i className = "fa fa-envelope indigo-text fa-2x"></i>
          <p className = "mt-2">career.foodpep@gmail.com</p>
          <li className = "mt-4">
          <div className="text-center">
              <Button color="deep-orange" color="unique">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
          </div>
          </li>
          </li>
          </ul>
          </Col>
          </Row>
          </div>
          </div>
          </Container>
          </div>
          </section>



</View>

<Footer color="unique-color-dark"  className="font-small pt-0">
     <Container>
         <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
             <Col md="2" className="b-3">
                 <h6 className="title font-weight-bold"><a href="#!">About us</a></h6>
             </Col>
             <Col md="2" className="b-3">
                 <h6 className="title font-weight-bold"><a href="#!">Products</a></h6>
             </Col>
             <Col md="2" className="b-3">
                 <h6 className="title font-weight-bold"><a href="#!">Awards</a></h6>
             </Col>
             <Col md="2" className="b-3">
                 <h6 className="title font-weight-bold"><a href="#!">Help</a></h6>
             </Col>
             <Col md="2" className="b-3">
                 <h6 className="title font-weight-bold"><a href="#!">Contact</a></h6>
             </Col>
         </Row>
         <hr className="rgba-white-light" style={{margin: '0 15%'}}/>
         <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
             <Col md="8" sm="12" className="mt-5">
                 <p style={{lineHeight: '1.7rem'}}>Best Customer Service Our Top Priority</p>
             </Col>
         </Row>
         <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}}/>
         <Row className="pb-3">
             <Col md="12">
                 <div className="mb-5 flex-center">
                     <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                     <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                     <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                     <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                     <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                     <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>
                 </div>
             </Col>
         </Row>
     </Container>
     <div className="footer-copyright text-center">
         <Container fluid>
             &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Foodpep.com </a>
         </Container>
     </div>
 </Footer>
 </div>




        );
    }
}

export default FooterPage;
