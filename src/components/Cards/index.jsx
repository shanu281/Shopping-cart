import React from "react";
import Data from "../Data/data";
import "./style.css"
import Card from "../Card";


class Cards extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let products = Data.products
        return (
            <>
                <section className="main">
                    <div>
                        <h1 className="total-products">16 Product(s) found</h1>
                    </div>
                    <div className="card-container">
                        {
                            this.props.activeSize === "" ?
                                products.map((product, i) =>
                                    <Card product={product} key={i} products={products} i={i} handleCart = {this.props.handleCart}/>
                                ) :

                                products.filter((product, i) =>
                                    product.availableSizes.includes(this.props.activeSize)
                                ).map((product, i) =>
                                    <Card product={product} key={i} products={products} i={i} handleCart = {this.props.handleCart}/>
                                    )
                                }
                    </div>
                </section></>
        )
    }
}
export default Cards;