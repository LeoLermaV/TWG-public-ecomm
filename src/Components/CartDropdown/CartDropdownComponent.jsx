import React from 'react';
import './CartDropdownComponent.scss';



class CartDropdownComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    



      render () {
          let cart;
          let total;
            //render either empty cart or items on the props

          if(Object.keys(this.props.arrayFromState).length === 0){
              cart = <div>Empty Cart</div>
          } else {
              //sum prices of items
              total = <div></div>
              //render items clicked
              cart = <div>
                  {this.props.arrayFromState
                  .map((cartItems,index)=>{
                      return(
                        <div id={index} key={index}>
                            <div>{cartItems.targetName}</div>
                            <div>${cartItems.targetPrice}</div>
                            <img className='cart-images' src={cartItems.targetImg} alt={index}/>
                        </div>
                      )})
                  }
              </div>
          }
          let classasigned = `${this.props.showHideSidenav} product-container `
          return (
              <div className={this.props.showHideSidenav}>
                <div className={classasigned}> 
                    <div>
                        {cart}
                        <div>
                            {total} 
                        </div>
                    </div>
                    <div>
                        go to checkout
                    </div>
                </div>
            </div>);
        };
}


export default CartDropdownComponent;