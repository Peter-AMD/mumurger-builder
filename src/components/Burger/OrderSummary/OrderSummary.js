import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
  render() {
    return (
      <Auxi>
        <h2>Your Order</h2>
        <p>A delicioys burger with the following ingredients:</p>
        <ul>
          {
            this.mapIngredientSummary(this.props.ingredients)
          }
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancelPurchase}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Auxi>
    )
  }
  mapIngredientSummary = (ingredientSummary) => {
    return Object.keys(ingredientSummary).map(ingredient => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: 'capitalize' }}>
            {ingredient}
          </span>
          : {ingredientSummary[ingredient]}
        </li>
      );
    })
  };
  
  
}

export default OrderSummary;