import React from "react";
import "./style.css"
import Cart from "../Cart";
import Aside from "../Aside";
import Cards from "../Cards";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSize: "",
            productIndex: "",
            activeSize: "",
            cartValue: [],
            cart: false,
            price: "",
            quantity: 1,

        }
    }
    handleSelectedSize = (size) => {
        this.setState({
            selectedSize: size, activeSize: size
        })
        console.log(size)
        console.log(this.state.activeSize)
    }

    handleCart = (product) => {
        this.setState({
            cartValue: [product].concat(this.state.cartValue)

        })
        console.log(this.state.cartValue)

    }

    handlePrice = (event) => {
        this.setState({
            price: event.target.value
        })
        console.log(this.state.price)
    }


    toggleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    handleQuantityAdd = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    handleQuantityRemove = () => {
        this.state.quantity > 1 ?
            this.setState({
                quantity: this.state.quantity - 1
            }) : this.setState({
                quantity: 1
            })

    }

    render() {
        console.log(this.state.selectedSize)
        return (
            <>
                <div className="container relative">
                    <Aside handleSelectedSize={this.handleSelectedSize} activeSize={this.state.activeSize} />
                    <Cards handleSelectedSize={this.handleSelectedSize} selectedSize={this.state.selectedSize} activeSize={this.state.activeSize} handleCart={this.handleCart} />
                    <Cart toggleCart={this.toggleCart} cart={this.state.cart} cartValue={this.state.cartValue} quantity={this.state.quantity} handleQuantityAdd={this.handleQuantityAdd} handleQuantityRemove={this.handleQuantityRemove} />
                </div>
            </>
        )
    }
}
export default App;