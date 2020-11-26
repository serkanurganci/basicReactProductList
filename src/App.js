import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import {Col, Container,Row} from 'reactstrap'
import alertify from 'alertifyjs'
import { Switch,Route } from 'react-router-dom'
import NotFound from './NotFound'
import CartList from './CartList'
import FormDemo1 from './FormDemo1'
import FormDemo2 from './FormDemo2'

export default class App extends Component{

  state={currentCatagory : "",products:[], cart:[] }
  

componentDidMount(){
  this.getProducts()
}

changeCategory = category =>{
  this.setState({currentCategory: category.categoryName})

  this.getProducts(category.id)
}
getProducts = categoryId =>{

  let url = "http://localhost:3000/products"
  if(categoryId){
    url += "?categoryId=" + categoryId
  }
  fetch(url)
  .then(response => response.json())
  .then(data => this.setState({products:data}))

}

addToCart = (product) =>{

  let newCart = this.state.cart
  var addedItem = newCart.find(c=>c.product.id === product.id)
  if(addedItem) {
    addedItem.quantility += 1
  }
  else{
    newCart.push({product:product,quantility:1})
  }
  
  this.setState({cart:newCart})
  alertify.success(product.productName + " added to cart!",2)
}

removeFromCart = (product) =>{
  let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
  this.setState({cart:newCart})
  alertify.success(product.productName + " removed from cart")
}
  render(){
    let categoryList = {title:"Category List" , description : "This is a CategoryList"}
    let productList = {title:"Product List" , description : "This is a ProductList"}
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList 
              currentCategory={this.state.currentCategory} 
              changeCategory={this.changeCategory} info={categoryList}/>
            </Col>
            <Col xs="9">
              <Switch>
                <Route 
                exact 
                path="/" 
                render={props => (
                  <ProductList 
                  {...props}  
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  info={productList}
                  />
                )}
              />
                <Route exact path="/cart" render={props => (
                  <CartList 
                  {...props}  
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                  />
                 )}/>
                 <Route path="/form1" component={FormDemo1}></Route>
                 <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}


