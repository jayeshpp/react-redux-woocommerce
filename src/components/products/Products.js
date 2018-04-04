import React from 'react';
import Product from './Product';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import config from "../../config";
import './products.css'

let cookies = new Cookies();
console.log(process.env)
class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        let getCookie = cookies.get('token');
        
        if(getCookie) {
            let headers = {
                'Authorization': `Bearer ${getCookie}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }

            axios.get(`${config.api_endpoint}/products`, {headers: headers})
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
            .catch(error => console.log(error));
        }

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