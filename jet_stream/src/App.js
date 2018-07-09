// import XMLHttpRequest from 'xmlhttprequest';
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import LoginForm from './Components/LoginForm';
// import ProductItem from './Components/ProductItem';
import ProductItemGroup from './Components/ProductItemGroup';
import './App.css';

class App extends Component {



  constructor(){
    super();
    this.state = {
      credentials: {
        id_token: '',
        login_body: ''
      }
    }
  }

  authenticateUser = (credentials) => {
    // pass credentials to Jet API using fetch
    this.setState({credentials})
    console.log(this.state)
  }

  componentWillMount = () =>{

  }

  componentDidMount = () =>{
    this.authenticateUser();
  }


  render() {
    const example_item = {
    main_image_url: 'https://crunchins.com/wp-content/uploads/2017/01/Chin-Chin-Family-Pack-600x600.png',
    price: 17.99,
    quantity: 20,
    product_title: 'Chin Chin Family Pack (1/2 Gal.)',
    status: 'Under Jet Review',
    product_description: 'Crunchins Origanl Chin Chin Snack.',
    shipping_weight_pounds: 2.3
  }

  const example_items = [{
  "main_image_url": "https://robohash.org/estvelest.bmp?size=300x300&set=set1",
  "price": 85.56,
  "quantity": 83,
  "product_title": "Mushroom - Chanterelle, Dry",
  "status": "Puce",
  "product_description": "Virtual bifurcated portal",
  "shipping_weight_pounds": 7.72
}, {
  "main_image_url": "https://robohash.org/ducimusquisaut.png?size=300x300&set=set1",
  "price": 30.27,
  "quantity": 33,
  "product_title": "Ham - Black Forest",
  "status": "Mauv",
  "product_description": "Streamlined system-worthy hub",
  "shipping_weight_pounds": 10.42
}, {
  "main_image_url": "https://robohash.org/rerumetconsequuntur.jpg?size=300x300&set=set1",
  "price": 64.19,
  "quantity": 94,
  "product_title": "Lid Coffee Cup 8oz Blk",
  "status": "Blue",
  "product_description": "Monitored context-sensitive frame",
  "shipping_weight_pounds": 7.72
}, {
  "main_image_url": "https://robohash.org/exercitationemautiste.png?size=300x300&set=set1",
  "price": 14.86,
  "quantity": 62,
  "product_title": "Beets - Golden",
  "status": "Red",
  "product_description": "Compatible bifurcated Graphical User Interface",
  "shipping_weight_pounds": 15.99
}, {
  "main_image_url": "https://robohash.org/uthicut.png?size=300x300&set=set1",
  "price": 9.4,
  "quantity": 43,
  "product_title": "Pastry - Baked Scones - Mini",
  "status": "Purple",
  "product_description": "Horizontal dynamic archive",
  "shipping_weight_pounds": 17.08
}, {
  "main_image_url": "https://robohash.org/voluptassimiliquepariatur.png?size=300x300&set=set1",
  "price": 74.78,
  "quantity": 95,
  "product_title": "Nantucket - Pomegranate Pear",
  "status": "Aquamarine",
  "product_description": "Persistent hybrid protocol",
  "shipping_weight_pounds": 7.74
}, {
  "main_image_url": "https://robohash.org/temporeculpacommodi.jpg?size=300x300&set=set1",
  "price": 73.96,
  "quantity": 95,
  "product_title": "Smoked Tongue",
  "status": "Goldenrod",
  "product_description": "Polarised value-added website",
  "shipping_weight_pounds": 13.11
}, {
  "main_image_url": "https://robohash.org/accusamusvoluptatesid.png?size=300x300&set=set1",
  "price": 50.87,
  "quantity": 56,
  "product_title": "Peach - Fresh",
  "status": "Khaki",
  "product_description": "Implemented methodical local area network",
  "shipping_weight_pounds": 10.78
}, {
  "main_image_url": "https://robohash.org/officiisiureomnis.jpg?size=300x300&set=set1",
  "price": 81.71,
  "quantity": 40,
  "product_title": "Cheese - Manchego, Spanish",
  "status": "Turquoise",
  "product_description": "Adaptive 3rd generation artificial intelligence",
  "shipping_weight_pounds": 3.31
}, {
  "main_image_url": "https://robohash.org/asperioressedprovident.jpg?size=300x300&set=set1",
  "price": 92.49,
  "quantity": 41,
  "product_title": "Hot Chocolate - Individual",
  "status": "Khaki",
  "product_description": "Seamless optimizing support",
  "shipping_weight_pounds": 6.3
}]
    return (
      <div className="App">
        <LoginForm idToken={this.authenticateUser.bind(this)} />
        <br/><h3 align='center'>Streamling your jet business</h3><br/>
        <Image fluid src={require('./Jet-Stream-logo-1.png')}/>
        <ProductItemGroup items={example_items} name='items_list'/>
      </div>
    );
    }
}

export default App;
