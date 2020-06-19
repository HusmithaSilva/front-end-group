import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Displayproducts extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://fashion-store-final.herokuapp.com/findAllProducts")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data})
            })


    }

    deleteitem = (productID) => {
        axios.delete("https://fashion-store-final.herokuapp.com/delete/" + productID)
            .then(response => {
                alert("product deleted")

                this.setState({
                    products: this.state.products.filter(product => product.productid !== productID)
                })
            })
    };



    render() {
        return (

            <div>

            <div className="jumbotron jumbotron-fluid bg-dark text-white">
                <div className="container">
                    <h1 className="display-4">Products available</h1>
                    <p className="lead">Here displayed the available product of the store.</p>
                </div>
            </div>

            <div>
                <Link to="/add">
                    <button className="btn btn-primary float-none">Add products</button>
                </Link>



            <div className="mt-3">

            <div className="row row-cols-1 row-cols-md-3">

                    {
                        this.state.products.map((product) =>

                            <div className="col mb-4">
                            <div className="card">
                                {/*<img src="..." className="card-img-top" alt="..."/>*/}
                                <div className="card-body bg-dark">
                                    {/*<h5 className="card-title">Card title</h5>*/}
                                    <p className="card-text text-white">{product.productid}</p>
                                    <p className="card-text text-white">{product.productname}</p>
                                    <p className="card-text text-white">{product.productdesc}</p>
                                    <p className="card-text text-white">{product.category}</p>
                                    <p className="card-text text-white">{product.productprice}</p>
                                    <p className="card-text text-white">{product.productdiscount}</p>

                                    <button type="button" className="btn btn-danger" onClick={this.deleteitem.bind(this, product.productid)}>delete</button>
                                </div>
                            </div>
                            </div>

                        )
                    }
            </div>

            </div>

            </div>

            </div>



        )

    }
}
export default Displayproducts;
