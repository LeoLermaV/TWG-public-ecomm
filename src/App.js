import React, {Component} from 'react';
import HeaderComponent from './Components/Header/HeaderComponent';
import ProductSearchComponent from './Components/ProductSearch/ProductSearchComponent';
import './App.css';
import CheckoutPage from './Components/Checkout/CheckoutComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:[],
            page: 'Main'
        };
        this.setNewState = this.setNewState.bind(this);

    }
    //callback to get Items in cart
    myCallback=(listInfo) => {
        console.log(listInfo);
        this.setState(
            {array: listInfo}
        )
    }

    callbackToGetState=(pageToShow) => {
        console.log(pageToShow);
        this.setState(
            {
                page : pageToShow
            }
        )
    }

    setNewState(){
        this.setState({
            page: 'Main'
        })
    }
  

    render() {
        const arrayFromState = this.state.array
        return (
            <div>
                <HeaderComponent callbackToGetState={this.callbackToGetState} arrayFromState={arrayFromState}/>
                {(() => {
                    if (this.state.page === 'Main'){
                        return (
                            <div className="App">
                                <ProductSearchComponent callbackToApp={this.myCallback} />
                             </div>
                        );
                    }
                    else if (this.state.page === 'Search') {
                        return (
                            <div>
                                <h1> Not Home</h1>
                                <button onClick={this.setNewState} >Button</button>
                            </div>
                        );
                    }
                    else if (this.state.page === 'Checkout'){
                        return(
                            <div>
                           <CheckoutPage arrayFromState={arrayFromState}/>
                           </div>
                        );
                    }
                    else {
                        return ( 
                            <div>
                            <h1>No State</h1>
                            <button onClick={this.setNewState} >Button</button>
                            </div>
                        );
                    }
                    })()}
            </div>
        );
    }
}



export default App; 
