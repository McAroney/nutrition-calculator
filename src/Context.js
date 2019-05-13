import React, { Component } from 'react'
import reducer from './actions'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    ingridients: [],
    recipe_message: '',
    results: [],
    recipe: [],
    total_recipe_carbs: 0,
    total_recipe_protein: 0,
    total_recipe_sugar: 0,
    total_recipe_fat: 0,
    total_recipe_weight: 0,
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
