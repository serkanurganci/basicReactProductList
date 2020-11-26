import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

export default class CategoryList extends Component {
    state = {
        categories: 
        [
            {categoryId:1,categoryName:"Beverages"},
            {categoryId:2,categoryName:"Condinents"}
        ]
    }
    
    componentDidMount(){

        this.getCategories()

    }

    getCategories = () =>{

        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => this.setState({categories:data}))

    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h2>{this.state.counter}</h2>
                <ListGroup>
                    {this.state.categories.map((category =>(

                    <ListGroupItem active = {category.categoryName === this.props.currentCategory?true:false}
                    onClick={() => this.props.changeCategory(category)} 
                    key={category.id}
                    >
                        {category.categoryName}
                    </ListGroupItem>

                    )
                    ))}
                </ListGroup>
                    {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
