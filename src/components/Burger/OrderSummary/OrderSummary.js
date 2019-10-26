import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';


const orderSummary = props => {
  const ingredientSummary = props.ingredients;
  return (
    <Auxi>
      <h2>Your Order</h2>
      <p>A delicioys burger with the following ingredients:</p>
      <ul>
        {
          Object.keys(ingredientSummary).map(ingredient => {
            return (
              <li key={ingredient}>
                <span style={{ textTransform: 'capitalize' }}>
                  {ingredient}
                </span>
                : {ingredientSummary[ingredient]}
              </li>
            );
          })
        }
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Auxi>
  )
}

export default orderSummary;