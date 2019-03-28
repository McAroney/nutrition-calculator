import React, { Component } from 'react'
import { Consumer } from '../Context'

export default class RecipeItem extends Component {
  render () {
    const { ingridient } = this.props

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div
              key={ingridient.id}
              className='recipe-item'
              onClick={() => {
                dispatch({
                  type: 'REMOVE_INGRIDIENT_FROM_RECIPE',
                  payload: ingridient
                })
              }}
            >
              {ingridient.quantity} {ingridient.unit} {ingridient.name}
            </div>
          )
        }}
      </Consumer>
    )
  }
}
