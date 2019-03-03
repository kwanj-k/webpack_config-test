import React, { Component } from 'react';
import Card from './card';
import './card.css';


class Products extends Component {
    state = {
        products: {
            productlist: [
                {
                    id: 1,
                    name: 'Monster',
                    price: 165,
                    inventory: 60
                },
                {
                    id: 2,
                    name: 'Redbull',
                    price: 150,
                    inventory: 45
                },
                {
                    id: 3,
                    name: 'Nescafe',
                    price: 500,
                    inventory: 100
                },
                {
                    id: 4,
                    name: 'laptop',
                    price: 65000,
                    inventory: 15
                },
                {
                    id: 5,
                    name: 'LED screen',
                    price: 95000,
                    inventory: 5
                },
                {
                    id: 6,
                    name: 'Beats',
                    price: 5000,
                    inventory: 15
                },
                {
                    id: 7,
                    name: 'laptop',
                    price: 65000,
                    inventory: 15
                },
                {
                    id: 8,
                    name: 'Monster',
                    price: 165,
                    inventory: 60
                },
            ]
        }
    }
    
    myproducts (){
       return(<Card productlist={ this.state.products } />);
    }
    render(){
        return(
            <div>
                <div className="products" >
                    <h1 >Available Products</h1>
                    { this.myproducts() }
                </div>
            </div>
        )
       
    }
}

export default Products;
