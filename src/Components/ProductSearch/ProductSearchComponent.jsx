import React, {Component} from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import './ProductSearchComponent.scss';

class ProductSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchState: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ResetStateOfChild  = React.createRef();
    }
    handleChange(event) {
        this.setState({ value: event.target.value});
    }
      handleSubmit(event) {
        event.preventDefault();
        this.setState({ searchState: this.state.value});
        this.ResetStateOfChild.current.ResetState();
    }
    myCallback=(listInfo) => {
        this.props.callbackToApp(listInfo);
    }

   
    render() {
        const { value } = this.state;
        const { searchState } = this.state;
        return (
            <div className="form">
             <form className='search-form' onSubmit={this.handleSubmit}>
                <input className='form-input' type="text"  value={this.state.value} onChange={this.handleChange} />
                    <div onClick={this.handleSubmit}className='search-button'>Search</div>
            </form>
            <ProductContainer callbackFromParent={this.myCallback} ref={this.ResetStateOfChild} searchState={searchState} value={value} />
            </div>
        );
    }
}



export default ProductSearchComponent; 
