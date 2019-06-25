import React, {Component} from 'react';
import Card from '../eachCard/card'
import './cards.scss';

class AppCards extends Component {

    render(){
        const { itemsAvailableForSale, addShoppingCartItem, handleImageError} = this.props
        const card = itemsAvailableForSale.map((item, index) => {
            return <div key={index}> <Card itemAvailableForSale = {item}
            addShoppingCartItem={addShoppingCartItem}
            index={index}
            handleImageError={handleImageError}/></div>
        })
        return(
            <div className="App-cards">
                {card}
            </div>
         );

    }
}

export default AppCards