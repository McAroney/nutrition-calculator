import React, { Component } from 'react'
import { Consumer } from '../Context'

class Calculator extends Component {
  render () {
    return (
      <div>
        <Consumer>
          {value => {
            const {
              total_recipe_carbs,
              total_recipe_protein,
              total_recipe_sugar,
              total_recipe_fat,
              total_recipe_weight
            } = value
            return (
              <p>
                Carbs <span>...</span> {total_recipe_carbs}
                <br />
                Protein <span>...</span> {total_recipe_protein}
                <br />
                Sugar <span>...</span> {total_recipe_sugar}
                <br />
                Fat <span>...</span> {total_recipe_fat}
                <br /> <br /> Weight <span>...</span> {total_recipe_weight}
              </p>
            )
          }}
        </Consumer>
      </div>
    )
  }
}

export default Calculator
