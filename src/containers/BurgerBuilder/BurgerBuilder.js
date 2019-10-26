import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  salad: 0.7,
  bacon: 1.2,
  cheese: .2,
  meat: 2.2,
  default: 4,

}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: INGREDIENT_PRICE.default,
    purchasable: false,
  };
  updatePurchasable = ingredients => {
    const total = Object.values(ingredients).reduce((sum, current) => {
      sum += current
      return sum;
    }, 0);

    this.setState(
      {
        purchasable: total > 0,
      }
    )
  }
  addIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const stateIngredientsCopy = { ...this.state.ingredients };

    stateIngredientsCopy[type] = updatedCount;
    const updatedPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;

    this.setState(
      {
        totalPrice: updatedPrice,
        ingredients: stateIngredientsCopy,
      }
    )
    this.updatePurchasable(stateIngredientsCopy);
  };
  removeIngredientHandler = type => {
    if(!this.state.ingredients[type]) return;

    const updatedCount = this.state.ingredients[type] - 1;
    const stateIngredientsCopy = { ...this.state.ingredients };

    stateIngredientsCopy[type] = updatedCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState(
      {
        totalPrice: updatedPrice,
        ingredients: stateIngredientsCopy,
      }
    )
    this.updatePurchasable(stateIngredientsCopy);
  }
  render () {
    const enableInfo = {...this.state.ingredients};
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          enable={enableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;