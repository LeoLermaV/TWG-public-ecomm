import React from 'react';
import './HeaderComponentStyles.scss';
import CartDropdownComponent from '../CartDropdown/CartDropdownComponent';

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showHideSidenav: "hidden"
        };
        this.toggleSidenav = this.toggleSidenav.bind(this);
    }
    //toggle show or hidden css to show or hide cart
    toggleSidenav = () => {
        var css = (this.state.showHideSidenav === "hidden") ? "show" : "hidden";
        this.setState({"showHideSidenav":css});
    };

    render () {
        //props to render products on Cart
        const arrayFromState=this.props.arrayFromState

        return (
            <div>
            <div className='header'>
            <div className='logo-container'> 
                LOGO
            </div>
            <div className='options'>   
                <div className='option'>SEARCH CATALOGUE</div> 
                <div className='option'>CATEGORIES</div>
                <div className='option' onClick={this.toggleSidenav.bind(this)} >CART</div>
            </div>
            <CartDropdownComponent arrayFromState={arrayFromState} showHideSidenav={this.state.showHideSidenav}/>
            </div>
              
              </div>

        );
    };
}

export default HeaderComponent;