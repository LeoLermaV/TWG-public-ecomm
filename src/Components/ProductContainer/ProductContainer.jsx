import React from 'react';
import Database from '../../noelleeming-catalog.json';
import './ProductContainer.scss';

class ProductContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            n1 : 0,
            n2 : 12,
            id: []
        };
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    //handle pagination on button Next 
    handleClickNext = () => {
        this.setState({
            n2: this.state.n2 + 12,
            n1: this.state.n1 + 12
        }); window.scrollTo(0, 0)
    }
    
    //handle pagination on button Previous
    handleClickPrevious = () => {
        this.setState({
            n2: this.state.n2 - 12,
            n1 : this.state.n1 - 12})
    }

    //Add to State the name price and img of product in order to show in cart/checkout page
    handleClick(e){
        let target = e.target;
        let targetName = target.parentElement.parentElement.getAttribute('name')
        let targetPrice = target.parentElement.parentElement.getAttribute('price')
        let targetImg = target.parentElement.parentElement.getAttribute('img')
        this.setState({
            id: [...this.state.id, {targetName,targetPrice,targetImg} ]});
     }

     //once state is updated run the callback to pass state
     componentDidUpdate(prevProps, prevState){
         if (this.state.id !== prevState.id){
            let cartItemsInfo = (this.state.id)
            this.props.callbackFromParent(cartItemsInfo);
        }
     }

     
     //on search show first page of items
    ResetState = () => {
        this.setState({
            n1:0,
            n2:12
        });
    }
   

    
    render () {
        
        const { n1, n2 } = this.state;
        let button;
        //Render Pagination buttons accordind to state
        if (n2 <= 12){
         button = <div className='pagination-buttons'> 
          <div className='pagination-button' onClick = {this.handleClickNext}>Next</div>
          </div>
        }
        else {
            button = <div className='pagination-buttons'>
        <div className='pagination-button' onClick = {this.handleClickPrevious}>Previous</div>
        <div className='pagination-button' onClick = {this.handleClickNext}>Next</div>
        </div>
        }

        return (
        <div>
        <div  className='search-result' >{ 
        //filter database, slice according to state pagination then map to render
            Database.filter((product)=> {
            return product.name
            .includes(this.props.searchState);})
            .slice(n1,n2)
            .map((listitem, index) => {
                return (
                    <div  className='search-result' key={index}>
                        <div name={listitem.name}  price={listitem.price} img={listitem.image_url}  className='product'>
                           <div  className='product-image'> <img className='product-image' src={listitem.image_url} alt={index}/></div>
                            <div className='product-name'>{listitem.name}</div>
                            <div className='product-price'>
                                <div>${listitem.price}</div>
                                <div onClick={this.handleClick} name={listitem.name} className='addtocart-button'>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                    )})
             } 
            
     </div>
     {button}
     </div>
     );
    }

}

export default ProductContainer;