import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Addcomponent from './component/add.component';
import DisplayItems from './component/display.component'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';


class App extends Component{

    // constructor() {
    //     super();
    //     this.state = this.initialstate;
    //     this.changeproduct = this.changeproduct.bind(this);
    //     this.clicksubmit = this.clicksubmit.bind(this);
    // }
    //
    // initialstate = {
    //     productid: '',
    //     productname: '',
    //     productdesc: '',
    //     category: '',
    //     productprice: '',
    //     productdiscount: ''
    // }
    //
    // changeproduct = (event) =>{
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }
    //
    // clicksubmit = (event) =>{
    //      event.preventDefault();
    //
    //     const product = {
    //         productid: this.state.productid,
    //         productname: this.state.productname,
    //         productdesc: this.state.productdesc,
    //         category: this.state.category,
    //         productprice: this.state.productprice,
    //         productdiscount: this.state.productdiscount
    //     };
    //
    //     axios.post("http://localhost:8080/addproducts", product)
    //         .then(response => {
    //             console.log(response.data)
    //             if(response.data != null){
    //                 this.setState(this.initialstate);
    //                 alert("data saved");
    //             }
    //         })
    // };
    //
    // render() {
    //     return (
    //         <div className="App">
    //             <form onSubmit={this.clicksubmit}>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputEmail1">ProductID</label>
    //                     <input type="text" className="form-control" name="productid" value={this.state.productid} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputEmail1">Product Name</label>
    //                     <input type="text" className="form-control" name="productname" value={this.state.productname} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputEmail1">Description</label>
    //                     <input type="text" className="form-control" name="productdesc" value={this.state.productdesc} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputEmail1">Category</label>
    //                     <input type="text" className="form-control" name="category" value={this.state.category} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputEmail1">Price</label>
    //                     <input type="text" className="form-control" name="productprice" value={this.state.productprice} onChange={this.changeproduct} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="exampleInputPassword1">Discount</label>
    //                     <input type="text" className="form-control" name="productdiscount" value={this.state.productdiscount} onChange={this.changeproduct} id="exampleInputPassword1"/>
    //                 </div>
    //
    //                 <button type="submit" className="btn btn-primary">Submit</button>
    //             </form>
    //
    //
    //
    //
    //         </div>
    //
    //     );
    // }

render() {
    return(
        <Router>
            <Switch>

                <Route path="/add" component={Addcomponent}/>
                <Route path="" component={DisplayItems}/>



            </Switch>

        </Router>

    )
}

}

export default App;
