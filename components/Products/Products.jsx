import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {route} = this.props;
        return (
            <section className="my-4">
                <div className="flex flex-wrap">
                    {this.props.products.map(item => <Product key={item.id} routes={route} product={item}/>)}
                </div>
            </section>
        );
    }
};

export default Products;