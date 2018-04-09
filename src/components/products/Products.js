import React from 'react';
import Product from './Product';    
import './products.css'
import Api from "../../auth";

class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }
    
    componentWillMount() {
        this.getData();
    }

    getData() {
        Api.get('products', (error, data, response) => {
            this.setState({
                products: JSON.parse(response)
            })
        });
    }

    render() {
        let {products} = this.state;
        if(products === undefined) {
            console.log("Loading...")   
        }
        
        return (
            products.map(response =>  
                <div className="item" key={response.id}>
                    <Product id={response.id} title={response.name} price={response.price} image={response.images[0].src}/>
                </div>
            )
        )
    }

}


export default Products;