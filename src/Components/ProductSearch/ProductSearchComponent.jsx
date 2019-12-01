import React, {Component} from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import './ProductSearchComponent.scss';

class ProductSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchState: '',
            brand: '',
            searchBrandState:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBrand = this.handleBrand.bind(this);
        this.ResetStateOfChild  = React.createRef();
    }
    handleChange(event) {
        this.setState({ value: event.target.value});
    }
    handleBrand(event) {
        this.setState({ brand: event.target.value });
    }
      handleSubmit(event) {
        event.preventDefault();
        this.setState({ searchState: this.state.value});
        this.setState({ searchBrandState: this.state.brand })
        this.ResetStateOfChild.current.ResetState();
    }
    myCallback=(listInfo) => {
        this.props.callbackToApp(listInfo);
    }

   
    render() {
        const { value } = this.state;
        const { searchState } = this.state;
        const { searchBrandState } = this.state;
        return (


            <div className="form">
             <form className='search-form' onSubmit={this.handleSubmit}>
                <input className='form-input' placeholder="Search Item" type="text"  value={this.state.value} onChange={this.handleChange} />
                <div onClick={this.handleSubmit}className='search-button'>Search</div>
                <select className='selector'  value={this.state.brand} onChange={this.handleBrand}>
                    <option value=""></option>
                    <option value="Breville">Breville</option>
                    <option value="Tuscany">Tuscany</option>
                    <option value="Canon">Canon</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                </select>
            </form>
            
            <ProductContainer callbackFromParent={this.myCallback} brand={searchBrandState} ref={this.ResetStateOfChild} searchState={searchState} value={value} />
            </div>
        );
    }
}



export default ProductSearchComponent; 
