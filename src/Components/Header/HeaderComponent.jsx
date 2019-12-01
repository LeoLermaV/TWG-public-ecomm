import React from 'react';
import './HeaderComponentStyles.scss';
import CartDropdownComponent from '../CartDropdown/CartDropdownComponent';

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showHideSidenav: "hidden",
            pageTo : '',
        };
        this.toggleSidenav = this.toggleSidenav.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    //toggle show or hidden css to show or hide cart
    toggleSidenav = () => {
        var css = (this.state.showHideSidenav === "hidden") ? "show" : "hidden";
        this.setState({"showHideSidenav":css});
    };
   
    handlePageChange = (e) => {
        this.setState({ pageTo: e.target.getAttribute('page') },() => {
            console.log(this.state.pageTo)
            let pageToGo = this.state.pageTo;
            console.log(pageToGo);
            this.props.callbackToGetState(pageToGo);

          });
    } 

    handlePageChange(e) {
        this.setState = ({
            pageTo :  e.target.getAttribute('page')
        })

        console.log( e.target.getAttribute('page'))
    }


    render () {
        //props to render products on Cart
        const arrayFromState=this.props.arrayFromState

        return (
            <div>
            <div className='header'>
            <div page='Main'onClick={this.handlePageChange} className='logo-container'> 
                LOGO
            </div>
            <div className='options'>   
                <div page='Categories'onClick={this.handlePageChange} className='option'>CATEGORIES</div>
                <div page='Checkout' onClick={this.handlePageChange} className='option'>CHECKOUT</div> 
                <div className='option' onClick={this.toggleSidenav.bind(this)} >CART</div>
            </div>
            <CartDropdownComponent arrayFromState={arrayFromState} showHideSidenav={this.state.showHideSidenav}/>
            </div>
              
              </div>

        );
    };
}

export default HeaderComponent;