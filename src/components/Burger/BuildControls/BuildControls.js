import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {
    label: 'Salad', type: 'salad',
  },
  {
    label: 'Bacon', type: 'bacon',
  },
  {
    label: 'Cheese', type: 'cheese',
  },
  {
    label: 'Meat', type: 'meat',
  },
]

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
      {
        controls.map(control => {
          const { type, label } = control;
          return (
            <BuildControl
              key={label}
              label={label}
              added={() => props.ingredientAdded(type)}
              removed={() => props.ingredientRemoved(type)}
              isEnabled={props.enable[type]} />
          )
        })
      }
      <button
        onClick={props.orderNow}
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  )

};

export default buildControls;