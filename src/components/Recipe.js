import React, { Component } from 'react'
import { Consumer } from '../Context'
import RecipeItem from './RecipeItem'
import Calculator from './Calculator'
import RecipeInfo from './RecipeInfo'

class Recipe extends Component {
  render () {
    return (
      <div className='recipe-box'>
        <h4>Recipe:</h4>
        <RecipeInfo />
        <Consumer>
          {value => {
            const { recipe } = value
            return recipe.map(ingridient => {
              return <RecipeItem key={ingridient.id} ingridient={ingridient} />
            })
          }}
        </Consumer>
        <Calculator />
      </div>
    )
  }
}

export default Recipe
