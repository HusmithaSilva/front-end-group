import React, {Component} from 'react';
// import './App.css';
import axios from 'axios';


class add extends Component{

    constructor() {
        super();
        this.state = this.initialstate;
        this.changeproduct = this.changeproduct.bind(this);
        this.clicksubmit = this.clicksubmit.bind(this);
    }

    initialstate = {
        productid: '',
        productname: '',
        productdesc: '',
        category: '',
        productprice: '',
        productdiscount: '',

        productidError : '',
        productnameError: '',
        productdescError: '',
        categoryError: '',
        productpriceError: '',
        productdiscountError: ''
    }

    validate = () =>{
        let productidError = "";
        let productnameError = "";
        let productdescError = "";
        let categoryError = "";
        let productpriceError = "";
        let productdiscountError = "";

        if (this.state.productid.length < 4){
            productidError = "Id should be greater than 4 ";
        }

        if (!this.state.productid.length){
            productidError = "ProductID field cannot be empty ";
        }

        if (!this.state.productname.length){
            productnameError = "Product name field cannot be empty ";
        }

        if (!this.state.productdesc.length){
            productdescError = "Description field cannot be empty ";
        }

        if (!this.state.category.length){
            categoryError = "Category field cannot be empty ";
        }

        if (!this.state.productprice.length){
            productpriceError = "Price field cannot be empty ";
        }

        // if (!this.state.productdiscount.length){
        //     productdiscountError = "Price field cannot be empty ";
        // }

        // if (this.state.productdiscount.length > 1 && this.state.productdiscount.length <2){
        //     productdiscountError = "It should be 2 digit number ";
        // }


        if (productidError || productnameError || productdescError || categoryError || productpriceError || productdiscountError){
            this.setState({
                productidError, productnameError, productdescError, categoryError, productpriceError, productdiscountError
            })
            return false;
        }

        return true;
    }

    changeproduct = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    clicksubmit = (event) => {
        event.preventDefault();

        const isValid = this.validate();

        if (isValid) {
            console.log("error free");


            const product = {
                productid: this.state.productid,
                productname: this.state.productname,
                productdesc: this.state.productdesc,
                category: this.state.category,
                productprice: this.state.productprice,
                productdiscount: this.state.productdiscount
            };

            axios.post("https://fashion-store-final.herokuapp.com/addproducts", product)
                .then(response => {
                    console.log(response.data)
                    if (response.data != null) {
                        this.setState(this.initialstate);
                        alert("data saved");
                    }
                })
        }
        ;

    }
    render() {
        return (
            <div className="App">

                <div className="jumbotron jumbotron-fluid bg-dark text-white w-80">
                    <div className="container">
                        <h1 className="display-4">Add Products</h1>
                        <p className="lead">Enter details of product that you want to insert to the system.</p>
                    </div>
                </div>


                <div className="w-50 mx-auto mt-5">

                <form onSubmit={this.clicksubmit}>
                    <div className="form-group mt-4 ">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">ProductID</label>
                        <input type="text" className="form-control w-75 mx-auto" name="productid" value={this.state.productid} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{color: "red"}}>{this.state.productidError}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Product Name</label>
                        <input type="text" className="form-control w-75 mx-auto" name="productname" value={this.state.productname} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{color: "red"}}>{this.state.productnameError}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Description</label>
                        <input type="text" className="form-control w-75 mx-auto" name="productdesc" value={this.state.productdesc} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{color: "red"}}>{this.state.productdescError}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Category</label>
                        <input type="text" className="form-control w-75 mx-auto" name="category" value={this.state.category} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{color: "red"}}>{this.state.categoryError}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Price</label>
                        <input type="text" className="form-control w-75 mx-auto" name="productprice" value={this.state.productprice} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{color: "red"}}>{this.state.productpriceError}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">Discount</label>
                        <input type="text" className="form-control w-75 mx-auto" name="productdiscount" value={this.state.productdiscount} onChange={this.changeproduct} id="exampleInputPassword1"/>
                        <div style={{color: "red"}}>{this.state.productdiscountError}</div>
                    </div>

                    <button type="submit" className="btn btn-primary">Add products</button>
                </form>


                </div>

            </div>

        );
    }


}

export default add;
