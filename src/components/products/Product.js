import React from 'react';

class Products extends React.Component {
    
    render() {
        return (
            <div className="item-inner">
                <div className="image-wrapper">
                    <a href="" title={this.props.title}>
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