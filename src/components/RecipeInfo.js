import React, { Component } from 'react'
import { Consumer } from '../Context'

class RecipeInfo extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          const { recipe_message } = value

          return (
            <React.Fragment>
              {recipe_message ? (
                <div className='message'>{recipe_message}</div>
              ) : (
                ''
              )}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default RecipeInfo
