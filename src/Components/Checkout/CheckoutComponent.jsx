import React from 'react';

class CheckoutPage extends React.Component {
    constructor(props){
        super(props);
        this.state = '';
    }

    render () {
        return (
        <div>
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
        );

    }
}

export default CheckoutPage;