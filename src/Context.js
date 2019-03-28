import React, { Component } from 'react'
import reducer from './actions'
const Context = React.createContext()

export class Provider extends Component {
  state = {
    ingridients: [
      {
        id: 1,
        name: 'egg',
        unit: 'serving',
        quantity: 1,
        weight_in_grams: 30,
        carbs: 32,
        sugar: 0,
        protein: 12,
        fat: 20
      },
      {
        id: 2,
        name: 'ham',
        unit: 'grams',
        quantity: 100,
        weight_in_grams: 100,
        carbs: 62,
        sugar: 5,
        protein: 22,
        fat: 20
      },
      {
        id: 3,
        name: 'broccoli',
        unit: 'grams',
        quantity: 100,
        weight_in_grams: 100,
        carbs: 32,
        sugar: 0,
        protein: 2,
        fat: 0
      },
      {
        id: 4,
        name: 'quacamole',
        unit: 'grams',
        quantity: 100,
        weight_in_grams: 100,
        carbs: 232,
        sugar: 40,
        protein: 8,
        fat: 10
      }
    ],
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
