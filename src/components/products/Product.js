import React from 'react';
import config from "../../config";

class Products extends React.Component {
    
    render() {
        return (
            <div className="item-inner">
                <div className="image-wrapper">
                    <a href={`${config.api_endpoint}/products/${this.props.id}`} title={this.props.title}>
                        <img src={this.props.image} alt={this.props.title}/>
                    </a>
                </div>
                <div className="descriptions">
                    <div className="title">{this.props.title}</div>
                    <div className="price-block">
                        <span>{this.props.price}</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;