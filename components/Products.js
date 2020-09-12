import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="my-4">
                <div className="flex flex-wrap">
                    {this.props.products.map(item => <Product key={item.id} product={item}/>)}
                </div>
            </section>
        )
    }
};
export default Products;