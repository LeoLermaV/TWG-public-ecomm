import React, {Component} from 'react';
import HeaderComponent from './Components/Header/HeaderComponent';
import ProductSearchComponent from './Components/ProductSearch/ProductSearchComponent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:[]
        };
    }
    //callback to get Items in cart
    myCallback=(listInfo) => {
        console.log(listInfo);
        this.setState(
            {array: listInfo}
        )
    }
  

    render() {
        const arrayFromState = this.state.array
        return (
            <div className="App">
            <HeaderComponent arrayFromState={arrayFromState}/>
            <ProductSearchComponent callbackToApp={this.myCallback} />
            </div>
        );
    }
}



export default App; 
