import React, { Component } from 'react'
import { Consumer } from '../Context'

class Resultcard extends Component {
  render () {
    const addToRecipe = (dispatch, item) => {
      dispatch({ type: 'ADD_INGRIDIENT_TO_RECIPE', payload: item })
    }
    const { result } = this.props
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div
              className='card result-card'
              onClick={() => {
                addToRecipe(dispatch, result)
              }}
            >
              <h4>{result.name}</h4>
              <i> weight per serving: </i> {result.weight_in_grams} grams
              <br />
              Carbohydrates... {result.carbs}
              &nbsp;|| Sugar... {result.sugar}
              <br />
              Protein... {result.protein}
              &nbsp;|| Fat... {result.fat}
              <br />
              <br />
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Resultcard
