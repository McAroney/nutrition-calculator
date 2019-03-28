import React, { Component } from 'react'
import { Consumer } from '../Context'
class Search extends Component {
  update (event, state) {
    if (event.keycode !== 13) {
      let input = event.target.value
      state.dispatch({ type: 'SEARCH_INGRIDIENTS', payload: input })
    }
  }

  render () {
    return (
      <Consumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault()
              }}
            >
              <input type='search' onKeyUp={e => this.update(e, value)} />
            </form>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
