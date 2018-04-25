import React from 'react';
import styles from './products.scss';

class Products extends React.Component {
    
    render() {
        return (
            <div className={styles["item-inner"]}>
                <div className={styles["image-wrapper"]}>
                    <a href="" title={this.props.title}>
                        <img src={this.props.image} alt={this.props.title}/>
                    </a>
                </div>
                <div className={styles["descriptions"]}>
                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles["price-block"]}>
                        {this.props.price}
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;