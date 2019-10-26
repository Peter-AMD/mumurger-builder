import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])]
        .map((placeholder, index) => <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>)
    })
    .reduce((accum, current) => {
      return accum.concat(current);
    }, []);
    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add ingredient to the burger!</p>;
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;